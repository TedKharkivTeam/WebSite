var m3D = function () {
    /* ---- Переменные ---- */
    var diapo = [],
        imb,
        scr,
        bar,
        selected,
        urlInfo,
        imagesPath = "http://upload.ted-kteam.com/IA/images/usersGallery/",
        previewNumber = 1,
        camera = {x: 0, y: 0, z: -650, s: 0, fov: 500},
        nw = 0,
        nh = 0,
        previousPosition;
    /* ==== метод сдвоенной камеры ==== */
    camera.setTarget = function (c0, t1, p) {
        if (Math.abs(t1 - c0) > .1) {
            camera.s = 1;
            camera.p = 0;
            camera.d = t1 - c0;
            if (p) {
                camera.d *= 2;
                camera.p = 9;
            }
        }
    };
    camera.tween = function (v) {
        if (camera.s != 0) {
            camera.p += camera.s;
            camera[v] += camera.d * camera.p * .01;
            if (camera.p == 10) camera.s = -1;
            else if (camera.p == 0) camera.s = 0;
        }
        return camera.s;
    };
    /* ==== Конструктор diapo ==== */
    var Diapo = function (n, img, x, y, z) {
        defaultPosition = null;
        if (img) {
            this.uuid = guid();
            this.url = img.url;
            this.title = img.title;
            this.color = img.color;
            this.isLoaded = false;
            if (document.createElement("canvas").getContext) {
                /* ---- используем элемент canvas вместо изображения (трюк для производительности) ---- */
                this.srcImg = new Image();
                this.srcImg.src = imagesPath + img.src;
                this.img = document.createElement("canvas");
                this.canvas = true;
                scr.appendChild(this.img);
            } else {
                /* ---- обычное изображение ---- */
                this.img = document.createElement('img');
                this.img.src = imagesPath + img.src;
                scr.appendChild(this.img);
            }
            /* ---- обработка событие onclick ---- */
            this.img.onclick = function () {
                var self = this;

                if (camera.s) return;
                if (this.diapo.isLoaded) {
                    if (this.diapo.urlActive) {
                        /* ---- гиперссылка для перехода ---- */
                        top.location.href = this.diapo.url;
                    } else {
                        if (selected && selected.uuid == self.diapo.uuid) {
                            camera.tz = previousPosition.z - this.diapo.h + 200;
                            camera.tx = previousPosition.x;
                            camera.ty = previousPosition.y;
                        } else {
                            previousPosition = JSON.parse(JSON.stringify(camera));
                            camera.tz = self.diapo.z - this.diapo.h + 200;
                            camera.tx = self.diapo.x;
                            camera.ty = self.diapo.y;
                        }

                        /* ---- disable previously selected images_for_slides ---- */
                        if (selected) {
                            selected.but.className = "button viewed";
                            selected.img.className = "";
                            selected.img.style.cursor = "pointer";
                            selected.urlActive = false;
                            urlInfo.style.visibility = "hidden";
                        }

                        /* ---- выбираем текущее изображение ---- */
                        self.diapo.but.className = "button selected";
                        interpolation(false);
                        selected = self.diapo;


                    }
                }
            };
            /* ---- кнопки панели управления ---- */
            this.but = document.createElement('div');
            this.but.className = "button";
            bar.appendChild(this.but);
            this.but.diapo = this;
            this.but.style.left = Math.round((this.but.offsetWidth * 1.2) * (n % 4)) + 'px';
            this.but.style.top = Math.round((this.but.offsetHeight * 1.2) * Math.floor(n / 4)) + 'px';
            this.but.onclick = this.img.onclick;
            imb = this.img;
            this.img.diapo = this;
            this.zi = 25000;
        } else {
            /* ---- прозрачный элемент div ---- */
            this.img = document.createElement('div');
            this.isLoaded = true;
            this.img.className = "fog";
            scr.appendChild(this.img);
            this.w = 300;
            this.h = 300;
            this.zi = 15000;
        }
        /* ---- перменные объекта ---- */
        this.x = x;
        this.y = y;
        this.z = z;
        this.css = this.img.style;
    };
    /* ==== основная 3D анимация ==== */
    Diapo.prototype.anim = function () {
        if (this.isLoaded) {
            /* ---- от 3D к 2D проекции ---- */
            var x = this.x - camera.x;
            var y = this.y - camera.y;
            var z = this.z - camera.z;
            if (z < 20) z += 5000;
            var p = camera.fov / z;
            var w = this.w * p;
            var h = this.h * p;
            /* ---- рисуем HTML  ---- */
            this.css.left = Math.round(nw + x * p - w * .5) + 'px';
            this.css.top = Math.round(nh + y * p - h * .5) + 'px';
            this.css.width = Math.round(w) + 'px';
            this.css.height = Math.round(h) + 'px';
            this.css.zIndex = this.zi - Math.round(z);
        } else {
            /* ---- изображение загружено? ---- */
            this.isLoaded = this.loading();
        }
    };
    /* ==== инициализация при загрузке ==== */
    Diapo.prototype.loading = function () {
        if ((this.canvas && this.srcImg.complete) || this.img.complete) {
            if (this.canvas) {
                /* ---- версия с элементом canvas ---- */
                this.w = this.srcImg.width;
                this.h = this.srcImg.height;
                this.img.width = this.w;
                this.img.height = this.h;
                var context = this.img.getContext("2d");
                context.drawImage(this.srcImg, 0, 0, this.w, this.h);
            } else {
                /* ---- версия с обычным изображением ---- */
                this.w = this.img.width;
                this.h = this.img.height;
            }
            /* ---- кнопка загружена ---- */
            this.but.className += " loaded";
            return true;
        }
        return false;
    };
    ////////////////////////////////////////////////////////////////////////////
    /* ==== размеры экрана ==== */
    var resize = function () {
        nw = scr.offsetWidth * .5;
        nh = scr.offsetHeight * .5;
    };
    /* ==== отключаем интерполяцию во время анимации ==== */
    var interpolation = function (bicubic) {
        var i = 0, o;
        while (o = diapo[i++]) {
            if (o.but) {
                o.css.msInterpolationMode = bicubic ? 'bicubic' : 'nearest-neighbor'; // makes IE8 happy
                o.css.imageRendering = bicubic ? 'optimizeQuality' : 'optimizeSpeed'; // does not really work...
            }
        }
    };
    /* ==== скрипт инициализации ==== */
    var init = function (data) {
        /* ---- контейнеры ---- */
        scr = document.getElementById("screen");
        bar = document.getElementById("bar");
        urlInfo = document.getElementById("urlInfo");
        resize();
        /* ---- загрузка изображений ---- */
        var i = 0,
            o,
            n = data.length;
        while (o = data[i++]) {
            /* ---- изображения ---- */
            var x = 1500 * ((i % 4) - 1.5);
            var y = Math.round(Math.random() * 4000) - 2000;
            var z = i * (5000 / n) + 300;
            diapo.push(new Diapo(i - 1, o, x, y, z));
            /* ---- прозрачные рамки ---- */
            var k = diapo.length - 1;
            for (var j = 0; j < 3; j++) {
                var x = Math.round(Math.random() * 4000) - 2000;
                var y = Math.round(Math.random() * 4000) - 2000;
                diapo.push(new Diapo(k, null, x, y, z + 100));
            }
        }
        /* ---- запуск движка ---- */
        run();
    };
    ////////////////////////////////////////////////////////////////////////////
    /* ==== основной цикл ==== */
    var run = function () {
        /* ---- пермещение по оси x ---- */
        if (camera.tx) {

            if (!camera.s) camera.setTarget(camera.x, camera.tx);
            var m = camera.tween('x');
            if (!m) camera.tx = 0;
            /* ---- перемещение по оси y ---- */
        } else if (camera.ty) {
            if (!camera.s) camera.setTarget(camera.y, camera.ty);
            var m = camera.tween('y');
            if (!m) camera.ty = 0;
            /* ---- перемещение по оси z ---- */
        } else if (camera.tz) {
            if (!camera.s) camera.setTarget(camera.z, camera.tz);
            var m = camera.tween('z');
            if (!m) {
                /* ---- конец анимации ---- */
                camera.tz = 0;
                interpolation(true);
                /* ---- активируем гиперссылку ---- */
                if (selected.url) {
                    selected.img.style.cursor = "pointer";
                    selected.urlActive = true;
                    selected.img.className = "href";
                    urlInfo.diapo = selected;
                    urlInfo.onclick = selected.img.onclick;
                    urlInfo.innerHTML = selected.title || selected.url;
                    urlInfo.style.visibility = "visible";
                    urlInfo.style.color = selected.color || "#fff";
                    urlInfo.style.top = Math.round(selected.img.offsetTop + selected.img.offsetHeight - urlInfo.offsetHeight - 5) + "px";
                    urlInfo.style.left = Math.round(selected.img.offsetLeft + selected.img.offsetWidth - urlInfo.offsetWidth - 5) + "px";
                } else {
                    selected.img.style.cursor = "default";
                }
            }
        }
        /* ---- анимация изображения ---- */
        var i = 0, o;
        while (o = diapo[i++]) o.anim();
        /* ---- цикл ---- */
        setTimeout(run, 32);
    };

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    return {
        ////////////////////////////////////////////////////////////////////////////
        /* ==== скрипт инициализации ==== */
        init: init
    }
}();