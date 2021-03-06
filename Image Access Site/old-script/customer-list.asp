<%@ LANGUAGE="VBScript" %>
<% 
  Function Rpad (MyValue, MyPadChar, MyPaddedLength)
    Rpad = MyValue & string(MyPaddedLength - Len(MyValue), MyPadChar)
  End Function
  
  iMode = 8
  set oFs = server.createobject("Scripting.FileSystemObject")
  if oFs.FileExists("C:\IIS-DataRoot\ImageAccess-20110107\DLSG\log\CustomerListLog.asp")=true then
    FileName = "C:\IIS-DataRoot\ImageAccess-20110107\DLSG\log\CustomerListLog.asp"
  else
    Filename = "C:\Users\todd.rowe\Documents\htdocs\dlsg\log\CustomerListLog.asp"
  end if
  set oTextFile = oFs.OpenTextFile(FileName, iMode, True)
    
  VisitorIP = Request.ServerVariables("remote_addr")
  VisitorDNS = Request.ServerVariables("remote_host")
  VisitorBrowser = Request.ServerVariables("http_user_agent")
  DisCodeRaw = Request.QueryString("DisCode")
  
  LogString = chr(13) & "AccessDate:,""" & Now() & """"   
  LogString = LogString & ",RequestIP:,""" & VisitorIP & """"
  LogString = LogString & ",RequestDNS:,""" & VisitorDNS & """"
  LogString = LogString & ",VisitorAgent:,""" & VisitorBrowser & """"
  LogString = LogString & ",RawCode:,""" & DisCodeRaw & """"
  oTextFile.Write LogString
  
  'this forces code length, Ted's algorithm seems to need flexible lenth keys...
  'DisCode=Rpad(ucase(left(DisCodeRaw,14)),"0",14)
  DisCode=ucase(DisCodeRaw)
  
  DisCodeC=left(DisCode,5)
  DisCodeST=left(DisCodeC,2)
  DisCodeINST=right(DisCodeC,3)
  
  'this also assumes that the "N" value must be length9
  'DisCodeN=right(DisCode,9)
  DisCodeN=right(DisCode,(len(DisCode)-5))
  
  Dim DisCodeArray(5,2) 
  for i=0 to 4
	  DisCodeArray(i,0)=Mid(DisCodeC,i+1,1)
	  DisCodeArray(i,1)=Asc(mid(DisCodeC,i+1,1)) 
  Next
  Fcode = DisCodeArray(0,1) + DisCodeArray(1,1) + (DisCodeArray(2,1)*17) + (DisCodeArray(3,1)*11) + (DisCodeArray(4,1)*7) 
  Gcode = (DisCodeN + 19760000000 - Fcode)/(17*31*43*71)
  GcodeI = int(Gcode)
  Discount = 0
  if (Gcode = GcodeI) then
    Discount = 20
  end if
  
  LogString = ",ParsedCode:,""" & DisCode & """" 
  LogString = LogString & ",StateCode:,""" & DisCodeST & """"
  LogString = LogString & ",InstitutionCode:,""" & DisCodeINST & """"
  LogString = LogString & ",F-Code:,""" & FCode & """"
  LogString = LogString & ",G-Code:,""" & GCode & """"
  LogString = LogString & ",ReturnVal:,""" & Discount & """"
  oTextFile.Write LogString   
  
  oTextFile.Close
  set oTextFile = nothing
  set oFS = nothing
  
  'Response.Write(Discount)
  if (Discount>0) then
    outfile = "<img src=""images/18-2.jpg"" alt="""">" & chr(13) & "<img src=""images/18-3.jpg"" alt="""">" & chr(13)
    outfile = outfile & "<h2 class=""headline"">REPRESENTATIVE CLIENT LIST</h2>" & chr(13)
    outfile = outfile & "<ul class=""customer-list"">" & chr(13)
outfile = outfile & "<li>ABRAHAM LINCOLN PRESIDENTIAL LIBRARY</li>" & chr(13)
outfile = outfile & "<li>ALAMO COMMUNITY COLLEGE DISTRICT</li>" & chr(13)
outfile = outfile & "<li>ALBION COLLEGE</li>" & chr(13)
outfile = outfile & "<li>AMERICAN MUSEUM OF NATURAL HISTORY</li>" & chr(13)
outfile = outfile & "<li>AMERICAN WIND POWER MUSEUM &amp; LIBRARY</li>" & chr(13)
outfile = outfile & "<li>ANGELO STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>ANISTON ARMY DEPOT</li>" & chr(13)
outfile = outfile & "<li>ARIZONA STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>AUGUSTA STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>BARD GRADUATE CENTER FOR STUDIES IN DECORATIVE ARTS</li>" & chr(13)
outfile = outfile & "<li>BAYLOR UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>BOSTON UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>BOSTON UNIVERSITY - SCHOOL OF LAW</li>" & chr(13)
outfile = outfile & "<li>BRANDEIS UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>BROWNSVILLE HISTORICAL ASSOC. &amp; HERITAGE MUSEUM</li>" & chr(13)
outfile = outfile & "<li>BRYN MAWR COLLEGE</li>" & chr(13)
outfile = outfile & "<li>BUFFALO &amp; ERIE COUNTY PUBLIC LIBRARY</li>" & chr(13)
outfile = outfile & "<li>CAL STATE FULLERTON</li>" & chr(13)
outfile = outfile & "<li>CAL STATE LONG BEACH</li>" & chr(13)
outfile = outfile & "<li>CAL STATE NORTHRIDGE</li>" & chr(13)
outfile = outfile & "<li>CAL STATE SAN MARCOS</li>" & chr(13)
outfile = outfile & "<li>CASE WESTERN RESERVE</li>" & chr(13)
outfile = outfile & "<li>CENTER FOR HELENIC STUDIES</li>" & chr(13)
outfile = outfile & "<li>CENTRAL CONNECTICUT STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>CENTRAL MISSOURI STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>CHICAGO STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>CLEVELAND STATE COMMUNITY COLLEGE</li>" & chr(13)
outfile = outfile & "<li>CLEVELAND STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>COLGATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>COLORADO STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>COLUMBIA UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>COLUMBIA UNIVERSITY SCHOOL OF LAW</li>" & chr(13)
outfile = outfile & "<li>COOK CHILDREN'S MEDICAL CENTER</li>" & chr(13)
outfile = outfile & "<li>COUNTWAY LIBRARY OF MEDICINE</li>" & chr(13)
outfile = outfile & "<li>CUNY - BARUCH COLLEGE</li>" & chr(13)
outfile = outfile & "<li>CUNY - BOROUGH OF MANHATTAN COMMUNITY COLLEGE</li>" & chr(13)
outfile = outfile & "<li>CUNY - CITY COLLEGE OF NEW YORK</li>" & chr(13)
outfile = outfile & "<li>CUNY - GRADUATE CENTER</li>" & chr(13)
outfile = outfile & "<li>DICKENSON COLLEGE</li>" & chr(13)
outfile = outfile & "<li>DUKE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>DUKE UNIVERSITY - DIVINITY SCHOOL</li>" & chr(13)
outfile = outfile & "<li>DUKE UNIVERSITY - SCHOOL OF MEDICINE</li>" & chr(13)
outfile = outfile & "<li>EAST SHAWNEE NATION OF OKLAHOMA</li>" & chr(13)
outfile = outfile & "<li>EASTERN NEW MEXICO UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>EDWARDS AFB RESEARCH LAB</li>" & chr(13)
outfile = outfile & "<li>EMORY UNIVERSITY SCHOOL OF LAW</li>" & chr(13)
outfile = outfile & "<li>FAYETTEVILLE STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>FLORIDA A &amp; M UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>FLORIDA ATLANTIC UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>FLORIDA INSTITUTE OF TECHNOLOGY</li>" & chr(13)
outfile = outfile & "<li>FLORIDA INTERNATIONAL UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>FORDHAM UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>FORDHAM UNIVERSITY - SCHOOL OF LAW</li>" & chr(13)
outfile = outfile & "<li>FULLER THEOLOGICAL SEMINARY</li>" & chr(13)
outfile = outfile & "<li>GAEA CONSULTANTS, LLC</li>" & chr(13)
outfile = outfile & "<li>GATEWAY COMMUNITY COLLEGE</li>" & chr(13)
outfile = outfile & "<li>GEORGE MASON UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>GEORGETOWN UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>GEORGIA STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>GEORGIA STATE UNIVERSITY - COLLEGE OF LAW</li>" & chr(13)
outfile = outfile & "<li>HARVARD BUSINESS SCHOOL</li>" & chr(13)
outfile = outfile & "<li>HARVARD GRADUATE SCHOOL OF EDUCATION</li>" & chr(13)
outfile = outfile & "<li>HARVARD UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>HARVARD UNIVERSITY DEPOSITORY</li>" & chr(13)
outfile = outfile & "<li>HILL COLLEGE</li>" & chr(13)
outfile = outfile & "<li>HOFSTRA UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>HOWARD HUGHES MEDICAL INSTITUTE</li>" & chr(13)
outfile = outfile & "<li>ILLINOIS INSTITUTE OF TECHNOLOGY</li>" & chr(13)
outfile = outfile & "<li>INDIANA UNIVERSITY - PURDUE UNIVERITY</li>" & chr(13)
outfile = outfile & "<li>INDIANA UNIVERSITY OF PENNSYLVANIA</li>" & chr(13)
outfile = outfile & "<li>IOWA STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>KANSAS STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>KEAN UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>KEENE STATE COLLEGE</li>" & chr(13)
outfile = outfile & "<li>KENESAW STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>KENYON COLLEGE</li>" & chr(13)
outfile = outfile & "<li>KINGMAN ARIZONA ARCHIVES</li>" & chr(13)
outfile = outfile & "<li>LEHMAN COLLEGE</li>" & chr(13)
outfile = outfile & "<li>LIBRARY OF MICHIGAN</li>" & chr(13)
outfile = outfile & "<li>LONE STAR COLLEGE SYSTEM</li>" & chr(13)
outfile = outfile & "<li>LOUISIANA STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>LOYOLA UNIVERSITY CHICAGO</li>" & chr(13)
outfile = outfile & "<li>MARYVILLE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>MIAMI UNIVERSITY/OXFORD</li>" & chr(13)
outfile = outfile & "<li>MICHIGAN STATE</li>" & chr(13)
outfile = outfile & "<li>MIDDLE TENNESSEE STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>MIT</li>" & chr(13)
outfile = outfile & "<li>MONTANA STATE UNIVERSITY - BILLINGS</li>" & chr(13)
outfile = outfile & "<li>MONTANA STATE UNIVERSITY - BOZEMAN</li>" & chr(13)
outfile = outfile & "<li>MONTSERRAT PUBLIC LIBRARY</li>" & chr(13)
outfile = outfile & "<li>NASHVILLE PUBLIC LIBRARY</li>" & chr(13)
outfile = outfile & "<li>NATIONAL ARCHIVES &amp; RECORDS ADMINISTRATION</li>" & chr(13)
outfile = outfile & "<li>NATIONAL INSTITUTE OF STANDARDS &amp; TECHNOLOGY</li>" & chr(13)
outfile = outfile & "<li>NEW MEXICO STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>NEW YORK UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>NEW YORK UNIVERSITY - INSTITUTE FOR THE STUDY OF THE ANCIENT WORLD</li>" & chr(13)
outfile = outfile & "<li>NEW YORK UNIVERSITY - INSTITUTE OF FINE ARTS</li>" & chr(13)
outfile = outfile & "<li>NORTHEASTERN UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>NORTHERN ARIZONA UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>NORTHWESTERN UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>OCCIDENTAL COLLEGE</li>" & chr(13)
outfile = outfile & "<li>OREGON STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>PRINCETON UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>PRINCIPIA COLLEGE</li>" & chr(13)
outfile = outfile & "<li>PROVIDENCE PUBLIC LIBRARY</li>" & chr(13)
outfile = outfile & "<li>PURDUE UNIVERSITY/CALUMET</li>" & chr(13)
outfile = outfile & "<li>PURDUE UNIVERSITY/LAFAYETTE</li>" & chr(13)
outfile = outfile & "<li>RHODE ISLAND SCHOOL OF DESIGN</li>" & chr(13)
outfile = outfile & "<li>RICE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SALEM STATE COLLEGE</li>" & chr(13)
outfile = outfile & "<li>SAN DIEGO STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SAN JOSE STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SANTA CLARA UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SANTA FE TRAIL CENTER</li>" & chr(13)
outfile = outfile & "<li>SOUTHERN ILLINOIS UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SOUTHERN METHODIST UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SOUTHERN METHODIST UNIVERSITY - SCHOOL OF LAW</li>" & chr(13)
outfile = outfile & "<li>SOUTHERN METHODIST UNIVERSITY - SCHOOL OF THEOLOGY</li>" & chr(13)
outfile = outfile & "<li>SOUTHERN OREGON UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SOUTHWESTERN UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SPARROW HEALTH SYSTEM</li>" & chr(13)
outfile = outfile & "<li>SPRING HILL COLLEGE</li>" & chr(13)
outfile = outfile & "<li>ST. JOHN'S UNIVERSITY - SCHOOL OF LAW</li>" & chr(13)
outfile = outfile & "<li>ST. LOUIS UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>ST. VINCENT COLLEGE / AMCOM OFFICE SYSTEMS</li>" & chr(13)
outfile = outfile & "<li>STANFORD UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>SUNY AT BUFFALO</li>" & chr(13)
outfile = outfile & "<li>SUNY COLLEGE - PLATTSBURGH</li>" & chr(13)
outfile = outfile & "<li>SUNY SUFFOLK COMMUNITY COLLEGE - AMMERMAN</li>" & chr(13)
outfile = outfile & "<li>SWARTHMORE COLLEGE</li>" & chr(13)
outfile = outfile & "<li>TENNESSEE STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>TEXAS A &amp; M - COLLEGE STATION</li>" & chr(13)
outfile = outfile & "<li>TEXAS STATE LIBRARY</li>" & chr(13)
outfile = outfile & "<li>TEXAS STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>TEXAS TECH UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>THE METROPOLITAN MUSEUM OF ART</li>" & chr(13)
outfile = outfile & "<li>THE SCRIPPS RESEARCH INSTITUTE</li>" & chr(13)
outfile = outfile & "<li>TUFTS UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>U. S. COURT OF APPEALS 11TH CIRCUIT</li>" & chr(13)
outfile = outfile & "<li>U. S. HOLOCAUST MEMORIAL MUSEUM</li>" & chr(13)
outfile = outfile & "<li>UCLA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF ALASKA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF ALASKA - ANCHORAGE</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF ARIZONA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF ARIZONA HEALTH SCIENCES LIBRARY</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF ARKANSAS - FAYETTEVILLE</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF CENTRAL FLORIDA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF CHICAGO</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF COLORADO - BOULDER</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF DENVER</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF FLORIDA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF HOUSTON - MAIN CAMPUS</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF HOUSTON - VICTORIA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF ILLINOIS/CHICAGO</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF ILLINOIS/URBANA CHAMPAIGN</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF KANSAS</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF KENTUCKY</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MASSACHUSETTS/AMHERST</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MEMPHIS</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MIAMI</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MISSISSIPPI MEDICAL CENTER</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MISSOURI - COLUMBIA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MISSOURI - KANSAS CITY</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MISSOURI - KANSAS CITY - HEALTH SCIENCES</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MISSOURI - KANSAS CITY - LAW</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF MONTANA - MISSOULA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF NEVADA /RENO/SCHOOL OF MEDICINE</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF NEW HAMPSHIRE/DURHAM</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF NEW MEXICO</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF NEW ORLEANS</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF NORTH CAROLINA/CHAPEL HILL</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF NORTH CAROLINA/CHARLOTTE</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF NORTH CAROLINA/WILMINGTON</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF NOTRE DAME</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF OKLAHOMA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF OREGON</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF PENNSYLVANIA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF PITTSBURGH</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF RICHMOND</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF SAN FRANCISCO</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF SOUTH DAKOTA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF SOUTH FLORIDA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF SOUTHERN MAINE</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF ST. THOMAS</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF TENNESSEE - KNOXVILLE</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF TENNESSEE - MARTIN</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF TEXAS - ARLINGTON</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF TEXAS - AUSTIN</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF TEXAS - EL PASO</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF TEXAS - PAN AMERICAN</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF TEXAS - SAN ANTONIO</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF TOLEDO</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF UTAH</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF VERMONT</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF WASHINGTON - HEALTH SCIENCES CENTER</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY OF WYOMING</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY SYSTEM OF GEORGIA</li>" & chr(13)
outfile = outfile & "<li>UNIVERSITY SYSTEM OF NEW HAMPSHIRE</li>" & chr(13)
outfile = outfile & "<li>UTAH STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>VALDOSTA STATE UNIVERSITY - MOBILE ILL CART</li>" & chr(13)
outfile = outfile & "<li>VANDERBILT UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>VILLANOVA UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>VIRGINIA COMMONWEALTH UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>WASHINGTON &amp; LEE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>WASHINGTON UNIVERSITY IN ST. LOUIS</li>" & chr(13)
outfile = outfile & "<li>WAYNE STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>WESTERN CAROLINA UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>WESTERN CONNECTICUT STATE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>WESTERN ILLINOIS UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>WESTERN KENTUCKY UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>WHITMAN COLLEGE</li>" & chr(13)
outfile = outfile & "<li>YALE UNIVERSITY</li>" & chr(13)
outfile = outfile & "<li>YALE UNIVERSITY - SCHOOL OF LAW</li>" & chr(13)
outfile = outfile & "</ul><hr>"
    Response.Write(outfile)
  end if 
%> 