<%@ LANGUAGE="VBScript" %>
<% 
'-------------------------------------------------------------------------------
'set pricing for a configured system (list rates)
Sub ListPricing (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"        
        if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,0) = 4498  'includes $749 furniture now (3749+749)            
        else
          if (kicsystem(sysid,2) = "Tabletop3") then
            PricingData(sysid,0) = 3549    'Touch Only cost $200 less
          else
            PricingData(sysid,0) = 3749
          end if        
        end if        
      case "ClickMini"        
        'if (kicsystem(sysid,2) = "Furniture") then 
        '  PricingData(sysid,0) = 5358     'On Stand Unit includes $304 furniture now (5054+304)
        'else
        '  if (kicsystem(sysid,2) = "Tabletop1") then 
        '     PricingData(sysid,0) = 5054  'Touch On Top
        '  else     
        '    if (kicsystem(sysid,2) = "Tabletop2") then 
        '      PricingData(sysid,0) = 4455.20  'Touch On Desk And Display
        '    else     
        '      PricingData(sysid,0) = 4255.20  'Tabletop3 -> Touch Only
        '    end if          
        '  end if           
        'end if
        '---- lets be smart and not do a nested shitload of if's...
        select case kicsystem(sysid,2)
          case "Furniture"
            PricingData(sysid,0) = 5358     'On Stand Unit includes $304 furniture now (5054+304)
          case "WideStand"
            PricingData(sysid,0) = 5494     'On Wide Stand includes $440 furniture now (5054+440)
          case "Tabletop1"
            PricingData(sysid,0) = 5054     'Touch On Top
          case "Tabletop2"
            PricingData(sysid,0) = 4455.20  'Touch On Desk And Display
          case "Tabletop3"
            PricingData(sysid,0) = 4255.20  'Tabletop3 -> Touch Only
          case else
            PricingData(sysid,0) = 5555     '$5555 is a warning that something went wrong 
        end select
        '---- m-kay?
                 
      case "Click"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,0) = 10398   'includes $399 furniture now (9999+399)
        else
          if (kicsystem(sysid,2) = "Tabletop3") then
            PricingData(sysid,0) = 9146.90   'Tabletop3 -> Touch Only
          else
            if (kicsystem(sysid,2) = "Tabletop2") then
              PricingData(sysid,0) = 9347
            else
              PricingData(sysid,0) = 9999
            end if
          end if
        end if
      case "Bookeye4"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,0) = 19948 'includes $999 furniture now (18949+999)
          ' international sales agreement compliance - scanner sold separately---------------------
          if (kicsystem(sysid,23) = 1) then 
            PricingData(sysid,0) = 5999           ' base per Ted   
          end if        
        else
          if (kicsystem(sysid,2) = "Tabletop2") then
            PricingData(sysid,0) = 19708  ' includes 18949 + $759 for wedge monitor
            ' international sales agreement compliance - scanner sold separately---------------------
            if (kicsystem(sysid,23) = 1) then 
              PricingData(sysid,0) = 5759          '5999-240 
            end if
          else
            PricingData(sysid,0) = 19308
            ' international sales agreement compliance - scanner sold separately---------------------
            if (kicsystem(sysid,23) = 1) then 
              PricingData(sysid,0) = 5359           '5999-640 
            end if
          end if
        end if
      case "Bookeye4V3"        
        if (kicsystem(sysid,2) = "Furniture") then 
          PricingData(sysid,0) = 12999    'includes $999 furniture now (12000+999)
          ' international sales agreement compliance - scanner sold separately---------------------
          if (kicsystem(sysid,23) = 1) then 
            PricingData(sysid,0) = 4999             'base per Ted 
          end if           
        else
          if (kicsystem(sysid,2) = "Tabletop2") then
            PricingData(sysid,0) = 12699    'tabletop Touch&View 12000 + 699 for wedge
            ' international sales agreement compliance - scanner sold separately---------------------
            if (kicsystem(sysid,23) = 1) then 
              PricingData(sysid,0) = 4699           '4999-300
            end if
          else
            PricingData(sysid,0) = 12299
            ' international sales agreement compliance - scanner sold separately---------------------
            if (kicsystem(sysid,23) = 1) then 
              PricingData(sysid,0) = 4299           '4999-700
            end if
          end if
        end if
    end select
    
    'paint
    select case kicsystem(sysid,1)
      case "Pearl"
        PricingData(sysid,1) = 449
      case else
        PricingData(sysid,1) = 0
    end select
    
    'furniture
    if (kicsystem(sysid,2) = "Furniture") then 
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,2) = 0  ' was 749, now part of list price
        case "ClickMini"
          PricingData(sysid,2) = 0  ' was 304 
        case "Click"
          PricingData(sysid,2) = 0  ' was 399
        case "Bookeye4"
          PricingData(sysid,2) = 0  ' was 999
        case "Bookeye4V3"
          PricingData(sysid,2) = 0  ' was 999          
      end select
	else
      PricingData(sysid,2) = 0
    end if
    
    'ocr
    if (kicsystem(sysid,3) = "OCR") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,3) = 499
        case "ClickMini"
          PricingData(sysid,3) = 499          
        case "Click"
          PricingData(sysid,3) = 499
        case "Bookeye4"
          PricingData(sysid,3) = 0
        case "Bookeye4V3"
          PricingData(sysid,3) = 0          
      end select
    else
      PricingData(sysid,3) = 0
    end if
    
    'tts
    if (kicsystem(sysid,4) = "TTS") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,4) = 499
        case "ClickMini"
          PricingData(sysid,4) = 499          
        case "Click"
          PricingData(sysid,4) = 499
        case "Bookeye4"
          PricingData(sysid,4) = 0
        case "Bookeye4V3"
          PricingData(sysid,4) = 0          
      end select
    else
      PricingData(sysid,4) = 0
    end if
    
    'adf
    if (kicsystem(sysid,5) = "adf") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,5) = 999
        case "ClickMini"
          PricingData(sysid,5) = 999          
        case "Click"
          PricingData(sysid,5) = 999
        case "Bookeye4"
          PricingData(sysid,5) = 999
        case "Bookeye4V3"
          PricingData(sysid,5) = 999          
      end select
    else
      PricingData(sysid,5) = 0
    end if
    
    'adf2
    if (kicsystem(sysid,6) = "adf2") then
      select case kicsystem(sysid,0)
        case "Bookeye4"
          PricingData(sysid,6) = 5999
        case "Bookeye4V3"
          PricingData(sysid,6) = 5999          
      end select
    else
      PricingData(sysid,6) = 0
    end if

    'turbo
    if (kicsystem(sysid,7) = "turbo") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,7) = 109
      end select
    else
      PricingData(sysid,7) = 0
    end if
    
    'plus
    if (kicsystem(sysid,8) = "plus") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,8) = 254    ' was 499 - lowered after Ted decided to lower inst disc for Bookedge Plus charge from $299->$200 while keeping discount rate %21 for main unit
      end select
    else
      PricingData(sysid,8) = 0
    end if
    
    'pc
    if (kicsystem(sysid,9) = "PC") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          if (kicsystem(sysid,2) = "Furniture") then 
            PricingData(sysid,9) = 699  'PC for stand
          else
            PricingData(sysid,9) = 999  'PC for tabletop
          end if          
        case "ClickMini"
          PricingData(sysid,9) = 499          
        case "Click"
          PricingData(sysid,9) = 499
        case "Bookeye4"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,9) = 699  'PC for stand
          else
            PricingData(sysid,9) = 799  'PC for tabletop
          end if
        case "Bookeye4V3"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,9) = 699  'PC for stand
          else
            PricingData(sysid,9) = 799  'PC for tabletop
          end if          
      end select
    else
      PricingData(sysid,9) = 0
    end if
    
    'smart dock
    select case kicsystem(sysid,10)
      case "smartdock"
        PricingData(sysid,10) = 799
      case else
        PricingData(sysid,10) = 0
    end select
    
    'foot pedal
    select case kicsystem(sysid,11)
      case "footpedal"
        PricingData(sysid,11) = 119
      case else
        PricingData(sysid,11) = 0
    end select
    
    '600 dpi
    select case kicsystem(sysid,12)
      case "dpi600"
        select case kicsystem(sysid,0)
          case "Bookeye4"
            PricingData(sysid,12) = 4500
          case "Bookeye4V3"
            PricingData(sysid,12) = 2250
        end select
      case else
        PricingData(sysid,12) = 0
    end select
    
    'color
    select case kicsystem(sysid,13)
      case "color"
        if (kicsystem(sysid,0) = "Bookeye4") then
          PricingData(sysid,13) = 3199          
        else
          PricingData(sysid,13) = 0     'color charge already included in base price of the other scanners
        end if
      case else
        PricingData(sysid,13) = 0
    end select
    
    'dual monitor 
    if (kicsystem(sysid,14) = "dualpc") then
    select case kicsystem(sysid,0)
       case "BookEdge"
            PricingData(sysid,14) = 0
        case "ClickMini"
          PricingData(sysid,14) = 0            
        case "Click"
          PricingData(sysid,14) = 0
        case "Bookeye4"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,14) = 0  'PC for stand
          else
            PricingData(sysid,14) = 0 ' was 559 'PC for tabletop now part of list price
          end if
        case "Bookeye4V3"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,14) = 0  'PC for stand
          else
            if (kicsystem(sysid,2) = "Tabletop2") then
              PricingData(sysid,14) = 0   'was 499 'PC for tabletop Touch&View
            else            
              PricingData(sysid,14) = 0   'was 299 'PC for tabletop Touch only
            end if          
          end if          
      end select
    else
      PricingData(sysid,14) = 0
    end if
    
	'dual video pc - now: Intel PC with Dual Video
    if (kicsystem(sysid,15) = "dualvideo") then
    select case kicsystem(sysid,0)
       case "BookEdge"
            'PricingData(sysid,15) = 0
            PricingData(sysid,15) = 799
        case "ClickMini"
          'PricingData(sysid,15) = 0            
          PricingData(sysid,15) = 799
        case "Click"
          'PricingData(sysid,15) = 0
          PricingData(sysid,15) = 799
        case "Bookeye4"
          'if (kicsystem(sysid,2) = "Furniture") then
          '  PricingData(sysid,15) = 0  'PC for stand
          'else
          '  PricingData(sysid,15) = 889 'PC for tabletop
          'end if
            PricingData(sysid,15) = 799
        case "Bookeye4V3"            
            PricingData(sysid,15) = 799
      end select
    else
      PricingData(sysid,15) = 0
    end if
	
    'view on neck
    select case kicsystem(sysid,16)
      case "neckview"
        PricingData(sysid,16) = 200
      case else
        PricingData(sysid,16) = 0
    end select

    'fleet management
    select case kicsystem(sysid,17)
      case "manager"
        PricingData(sysid,17) = 500 '399
        'fleet management subscription
        PricingData(sysid,18) = 59
      case else
        PricingData(sysid,17) = 0
        PricingData(sysid,18) = 0
    end select
        	
'expanding option variables 16-23 (7/9/13 WC) -- begin
'expanding option variables 17-23 (2/17/15 WC) -- begin
'expanding option variables 18-23 (10/29/15 WC) -- begin
	 'PricingData(sysid,16) = 0
	 'PricingData(sysid,17) = 0
	 'PricingData(sysid,18) = 0
	 PricingData(sysid,19) = 0
	 PricingData(sysid,20) = 0
	 PricingData(sysid,21) = 0
	 PricingData(sysid,22) = 0
	 PricingData(sysid,23) = 0
'expanding option variables 14-23 (7/9/13 WC) --end	 	
	
    'unit discount amount ($0 for list pricing)
    PricingData(sysid,25) = 0
         
End Sub

'-------------------------------------------------------------------------------
'set pricing for a configured system (list rates, high volume)
Sub ListPricingHV (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"        
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 3711   '2999+712  includes furniture charge now
        else
          if (kicsystem(sysid,2) = "Tabletop3") then
            PricingData(sysid,30) = 2799    'Touch Only cost $200 less
          else
            PricingData(sysid,30) = 2999    'per Ted - Bookedge agresive with HW discount - match Inst. Discount rate
          end if                
        end if                
      case "ClickMini"
        '---- lets be smart and not do a nested shitload of if's...
        select case kicsystem(sysid,2)
          case "Furniture"
            PricingData(sysid,30) = 5090     'On Stand Unit includes $304 furniture now (5054+304)
          case "WideStand"
            PricingData(sysid,30) = 5244     'On Wide Stand includes $440 furniture now (5054+440)
          case "Tabletop1"
            PricingData(sysid,30) = 4801     'Touch On Top
          case "Tabletop2"
            PricingData(sysid,30) = 4242     'Touch On Desk And Display
          case "Tabletop3"
            PricingData(sysid,30) = 4042     'Tabletop3 -> Touch Only
          case else
            PricingData(sysid,30) = 5555     '$5555 is a warning that something went wrong 
        end select
        '---- m-kay?         
      case "Click"   
        if (kicsystem(sysid,2) = "Furniture") then     
          PricingData(sysid,30) = 9878       'On Stand Unit with furniture charge $379
        else
          if (kicsystem(sysid,2) = "Tabletop3") then
            PricingData(sysid,30) = 8690   'Tabletop3 -> Touch Only
          else
            if (kicsystem(sysid,2) = "Tabletop2") then
              PricingData(sysid,30) = 8890
            else
              PricingData(sysid,30) = 9499
            end if
          end if                        
        end if                        
      case "Bookeye4"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 18939  '17990 +  949 for furniture
        else
          if (kicsystem(sysid,2) = "Tabletop2") then
            PricingData(sysid,30) = 18689  ' 17990 + 699 includes wedge
          else
            PricingData(sysid,30) = 18289
          end if
        end if
      case "Bookeye4V3"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 12375  'includes 999 for furniture
        else
          if (kicsystem(sysid,2) = "Tabletop2") then
            PricingData(sysid,30) = 12099   '11376 + $723 for wedge
          else
            PricingData(sysid,30) = 11699   '11376 + $323 for wedge
          end if
        end if
    end select
    
    'paint
    select case kicsystem(sysid,1)
      case "Pearl"
        PricingData(sysid,31) = 449
      case else
        PricingData(sysid,31) = 0
    end select
    
    'furniture
    if (kicsystem(sysid,2) = "Furniture") then 
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,32) = 0  'was 712
        case "ClickMini"
          PricingData(sysid,32) = 0  'was 289
        case "Click"
          PricingData(sysid,32) = 0  'was 379
        case "Bookeye4"
          PricingData(sysid,32) = 0  'was 999
        case "Bookeye4V3"
          PricingData(sysid,32) = 0  'was 999  
      end select
    else
      PricingData(sysid,32) = 0
    end if
    
    'ocr
    if (kicsystem(sysid,3) = "OCR") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,33) = 499
        case "ClickMini"
          PricingData(sysid,33) = 499          
        case "Click"
          PricingData(sysid,33) = 499
        case "Bookeye4"
          PricingData(sysid,33) = 0
        case "Bookeye4V3"
          PricingData(sysid,33) = 0          
      end select
    else
      PricingData(sysid,33) = 0
    end if
    
    'tts
    if (kicsystem(sysid,4) = "TTS") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,34) = 499
        case "ClickMini"
          PricingData(sysid,34) = 499          
        case "Click"
          PricingData(sysid,34) = 499
        case "Bookeye4"
          PricingData(sysid,34) = 0
        case "Bookeye4V3"
          PricingData(sysid,34) = 0          
      end select
    else
      PricingData(sysid,34) = 0
    end if
    
    'adf
    if (kicsystem(sysid,5) = "adf") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,35) = 849
        case "ClickMini"
          PricingData(sysid,35) = 849          
        case "Click"
          PricingData(sysid,35) = 849
        case "Bookeye4"
          PricingData(sysid,35) = 999
        case "Bookeye4V3"
          PricingData(sysid,35) = 999          
      end select
    else
      PricingData(sysid,35) = 0
    end if
    
    'adf2
    if (kicsystem(sysid,6) = "adf2") then
      select case kicsystem(sysid,0)
        case "Bookeye4"
          PricingData(sysid,36) = 5999
        case "Bookeye4V3"
          PricingData(sysid,36) = 5999          
      end select
    else
      PricingData(sysid,36) = 0
    end if

    'turbo
    if (kicsystem(sysid,7) = "turbo") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,37) = 109
      end select
    else
      PricingData(sysid,37) = 0
    end if
    
    'plus
    if (kicsystem(sysid,8) = "plus") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,38) = 241
      end select
    else
      PricingData(sysid,38) = 0
    end if
    
    'pc
    if (kicsystem(sysid,9) = "PC") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          if (kicsystem(sysid,2) = "Furniture") then 
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 999  'PC for tabletop
          end if
        case "ClickMini"
          PricingData(sysid,39) = 499          
        case "Click"
          PricingData(sysid,39) = 499
        case "Bookeye4"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 799  'PC for tabletop
          end if
        case "Bookeye4V3"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 799  'PC for tabletop
          end if          
      end select
    else
      PricingData(sysid,39) = 0
    end if
    
    'smart dock
    select case kicsystem(sysid,10)
      case "smartdock"
        PricingData(sysid,40) = 799
      case else
        PricingData(sysid,40) = 0
    end select
    
    'foot pedal
    select case kicsystem(sysid,11)
      case "footpedal"
        PricingData(sysid,41) = 119
      case else
        PricingData(sysid,41) = 0
    end select
    
    '600 dpi
    select case kicsystem(sysid,12)
      case "dpi600"
        select case kicsystem(sysid,0)
          case "Bookeye4"
            PricingData(sysid,42) = 4275
          case "Bookeye4V3"
            PricingData(sysid,42) = 2138
        end select
      case else
        PricingData(sysid,42) = 0
    end select
    
    'color
    select case kicsystem(sysid,13)
      case "color"                
        if (kicsystem(sysid,0) = "Bookeye4") then
          PricingData(sysid,43) = 3045
        else
          PricingData(sysid,43) = 0     'color charge already included in base price of the other scanners
        end if                        
      case else
        PricingData(sysid,43) = 0
    end select
    
    'dual monitor pc
    if (kicsystem(sysid,14) = "dualpc") then
    select case kicsystem(sysid,0)
       case "BookEdge"
            PricingData(sysid,44) = 0
        case "ClickMini"
          PricingData(sysid,44) = 0            
        case "Click"
          PricingData(sysid,44) = 0
        case "Bookeye4"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,44) = 0  'PC for stand
          else
            PricingData(sysid,44) = 0  'was 499 'PC for tabletop
          end if
        case "Bookeye4V3"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,44) = 0  'PC for stand
          else                        
            if (kicsystem(sysid,2) = "Tabletop2") then
              PricingData(sysid,44) = 0   'was 523 'PC for tabletop Touch&View
            else            
              PricingData(sysid,44) = 0   'was 323 'PC for tabletop Touch only
            end if                         
          end if          
      end select
    else
      PricingData(sysid,44) = 0
    end if
	
	'dual video pc
    if (kicsystem(sysid,15) = "dualvideo") then
    select case kicsystem(sysid,0)
       case "BookEdge"
            'PricingData(sysid,45) = 0
            PricingData(sysid,45) = 759		'  $799 - 5% discount
        case "ClickMini"
          'PricingData(sysid,45) = 0            
          PricingData(sysid,45) = 759
        case "Click"
          'PricingData(sysid,45) = 0
          PricingData(sysid,45) = 759
        case "Bookeye4"
          'if (kicsystem(sysid,2) = "Furniture") then
          '  PricingData(sysid,45) = 0  'PC for stand
          'else
          '  PricingData(sysid,45) = 759 'PC for tabletop
          'end if
          PricingData(sysid,45) = 759
        case "Bookeye4V3"          
          PricingData(sysid,45) = 759        
      end select
    else
      PricingData(sysid,45) = 0
    end if

    'view on neck
    select case kicsystem(sysid,16)
      case "neckview"
        PricingData(sysid,46) = 200
      case else
        PricingData(sysid,46) = 0
    end select
    
    'fleet management
    select case kicsystem(sysid,17)
      case "manager"
        PricingData(sysid,47) = 500 '379
        'fleet management subscription
        PricingData(sysid,48) = 59
      case else
        PricingData(sysid,47) = 0
        PricingData(sysid,48) = 0
    end select    
    	
'expanding option variables 46-53 (7/9/13 WC) -- begin
'expanding option variables 47-23 (2/17/15 WC) -- begin
'expanding option variables 48-23 (10/29/15 WC) -- begin
	 'PricingData(sysid,46) = 0
	 'PricingData(sysid,47) = 0
	 'PricingData(sysid,48) = 0
	 PricingData(sysid,49) = 0
	 PricingData(sysid,50) = 0
	 PricingData(sysid,51) = 0
	 PricingData(sysid,52) = 0
	 PricingData(sysid,53) = 0
'expanding option variables 46-53 (7/9/13 WC) --end
         
End Sub

'-------------------------------------------------------------------------------                                                                                
'set pricing for a configured system (institutional rates)
Sub InsDiscPricing (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"        
        if (kicsystem(sysid,2) = "Furniture") then 
          PricingData(sysid,30) = 3598   ' 2999 + 599 for furniture
        else
          if (kicsystem(sysid,2) = "Tabletop3") then
            PricingData(sysid,30) = 2799    'Touch Only cost $200 less
          else
            PricingData(sysid,30) = 2999
          end if             
        end if             
      case "ClickMini"
        '---- lets be smart and not do a nested shitload of if's...
        select case kicsystem(sysid,2)
          case "Furniture"
            PricingData(sysid,30) = 4822     'On Stand Unit includes $304 furniture now (5054+304)
          case "WideStand"
            PricingData(sysid,30) = 4972     'On Wide Stand includes $440 furniture now (5054+440)
          case "Tabletop1"
            PricingData(sysid,30) = 4549     'Touch On Top
          case "Tabletop2"
            PricingData(sysid,30) = 4029     'Touch On Desk And Display
          case "Tabletop3"
            PricingData(sysid,30) = 3829     'Tabletop3 -> Touch Only
          case else
            PricingData(sysid,30) = 5555     '$5555 is a warning that something went wrong 
        end select
        '---- m-kay?               
      case "Click"   
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 8298   ' 7999 + 299 for furniture
        else     
          if (kicsystem(sysid,2) = "Tabletop3") then
            PricingData(sysid,30) = 7280   'Tabletop3 -> Touch Only
          else          
            if (kicsystem(sysid,2) = "Tabletop2") then
              PricingData(sysid,30) = 7480
            else
              PricingData(sysid,30) = 7999
            end if          
          end if                
        end if                
      case "Bookeye4"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 14999      '14199 + 800 for furniture
        else
          if (kicsystem(sysid,2) = "Tabletop2") then
            PricingData(sysid,30) = 14599      '14199 + 400 for wedge
          else
            PricingData(sysid,30) = 14199
          end if
        end if  
      case "Bookeye4V3"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 12499       '11599 + 900 for furniture
        else        
          if (kicsystem(sysid,2) = "Tabletop2") then
            PricingData(sysid,30) = 12199       '11599 + 600 for wedge
          else
            PricingData(sysid,30) = 11799       '11599 + 200 for wedge
          end if
        end if
    end select
    
    'paint
    select case kicsystem(sysid,1)
      case "Pearl"
        PricingData(sysid,31) = 399
      case else
        PricingData(sysid,31) = 0
    end select
    
    'furniture
    if (kicsystem(sysid,2) = "Furniture") then 
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,32) = 0  'was 599
        case "ClickMini"
          PricingData(sysid,32) = 0  'was 273          
        case "Click"
          PricingData(sysid,32) = 0  'was 299
        case "Bookeye4"
          PricingData(sysid,32) = 0  'was 800
        case "Bookeye4V3"
          PricingData(sysid,32) = 0  'was 900          
      end select
    else
      PricingData(sysid,32) = 0
    end if
    
    'ocr
    if (kicsystem(sysid,3) = "OCR") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,33) = 399
        case "ClickMini"
          PricingData(sysid,33) = 399          
        case "Click"
          PricingData(sysid,33) = 399
        case "Bookeye4"
          PricingData(sysid,33) = 0
        case "Bookeye4V3"
          PricingData(sysid,33) = 0          
      end select
    else
      PricingData(sysid,33) = 0
    end if
    
    'tts
    if (kicsystem(sysid,4) = "TTS") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,34) = 399
        case "ClickMini"
          PricingData(sysid,34) = 399          
        case "Click"
          PricingData(sysid,34) = 399
        case "Bookeye4"
          PricingData(sysid,34) = 0
        case "Bookeye4V3"
          PricingData(sysid,34) = 0          
      end select
    else
      PricingData(sysid,34) = 0
    end if
    
    'adf
    if (kicsystem(sysid,5) = "adf") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,35) = 699
        case "ClickMini"
          PricingData(sysid,35) = 699          
        case "Click"
          PricingData(sysid,35) = 699
        case "Bookeye4"
          PricingData(sysid,35) = 699
        case "Bookeye4V3"
          PricingData(sysid,35) = 699          
      end select
    else
      PricingData(sysid,35) = 0
    end if
    
    'adf2
    if (kicsystem(sysid,6) = "adf2") then
      select case kicsystem(sysid,0)
        case "Bookeye4"
          PricingData(sysid,36) = 4999
        case "Bookeye4V3"
          PricingData(sysid,36) = 4999          
      end select
    else
      PricingData(sysid,36) = 0
    end if

    'turbo
    if (kicsystem(sysid,7) = "turbo") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,37) = 99
      end select
    else
      PricingData(sysid,37) = 0
    end if
    
    'plus
    if (kicsystem(sysid,8) = "plus") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,38) = 200    'was 299 by reducing this item, Ted wanted to have TouchOnly, with Bookedge plus, No Intel PC, no maintenance for $2999
      end select
    else
      PricingData(sysid,38) = 0
    end if
    
    'pc
    if (kicsystem(sysid,9) = "PC") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          if (kicsystem(sysid,2) = "Furniture") then 
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 999  'PC for tabletop
          end if
        case "ClickMini"
          PricingData(sysid,39) = 499          
        case "Click"
          PricingData(sysid,39) = 499
        case "Bookeye4"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 799  'PC for tabletop
          end if
        case "Bookeye4V3"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 799  'PC for tabletop
          end if          
      end select
    else
      PricingData(sysid,39) = 0
    end if
    
    'smart dock
    select case kicsystem(sysid,10)
      case "smartdock"
        PricingData(sysid,40) = 699
      case else
        PricingData(sysid,40) = 0
    end select
    
    'foot pedal
    select case kicsystem(sysid,11)
      case "footpedal"
        select case kicsystem(sysid,0)
          case "Bookeye4"
            PricingData(sysid,41) = 0
          case "Bookeye4V3"
            PricingData(sysid,41) = 0            
          case else
            PricingData(sysid,41) = 99
        end select                              
      case else
        PricingData(sysid,41) = 0
    end select
    
    '600 dpi
    select case kicsystem(sysid,12)
      case "dpi600"
        select case kicsystem(sysid,0)
          case "Bookeye4"
            PricingData(sysid,42) = 4050
          case "Bookeye4V3"
            PricingData(sysid,42) = 2025
        end select
      case else
        PricingData(sysid,42) = 0
    end select
    
    'color
    select case kicsystem(sysid,13)
      case "color"        
        if (kicsystem(sysid,0) = "Bookeye4") then
          PricingData(sysid,43) = 2000          
        else          
          PricingData(sysid,43) = 0     'color charge already included in base price of the other scanners          
        end if                                        
      case else
        PricingData(sysid,43) = 0
    end select
    
    'dual monitor pc
    if (kicsystem(sysid,14) = "dualpc") then
    select case kicsystem(sysid,0)
       case "BookEdge"
            PricingData(sysid,44) = 0
        case "ClickMini"
          PricingData(sysid,44) = 0            
        case "Click"
          PricingData(sysid,44) = 0
        case "Bookeye4"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,44) = 0  'PC for stand
          else
            PricingData(sysid,44) = 0  'was 499 wedge for tabletop
          end if
        case "Bookeye4V3"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,44) = 0  'PC for stand
          else                        
            if (kicsystem(sysid,2) = "Tabletop2") then
              PricingData(sysid,44) = 0  'was 400 wedge for tabletop Touch&View
            else            
              PricingData(sysid,44) = 0  'was 200 wedge for tabletop Touch only
            end if                         
          end if          
      end select
    else
      PricingData(sysid,44) = 0
    end if
	
	'dual video pc
    if (kicsystem(sysid,15) = "dualvideo") then
    select case kicsystem(sysid,0)
       case "BookEdge"
            'PricingData(sysid,45) = 0
            PricingData(sysid,45) = 719
        case "ClickMini"
          'PricingData(sysid,45) = 0 
          PricingData(sysid,45) = 719           
        case "Click"
          'PricingData(sysid,45) = 0
          PricingData(sysid,45) = 719
        case "Bookeye4"
          'if (kicsystem(sysid,2) = "Furniture") then
          '  PricingData(sysid,45) = 0  'PC for stand
          'else
          '  PricingData(sysid,45) = 799 'PC for tabletop
          'end if
          PricingData(sysid,45) = 719
        case "Bookeye4V3"
          PricingData(sysid,45) = 719
      end select
    else
      PricingData(sysid,45) = 0
    end if
         
    'view on neck
    select case kicsystem(sysid,16)
      case "neckview"
        PricingData(sysid,46) = 200
      case else
        PricingData(sysid,46) = 0
    end select
    
    'fleet management
    select case kicsystem(sysid,17)
      case "manager"
        PricingData(sysid,47) = 500 '359
        'fleet management subscription
        PricingData(sysid,48) = 59
      case else
        PricingData(sysid,47) = 0
        PricingData(sysid,48) = 0
    end select
    	
'expanding option variables 46-53 (7/9/13 WC) -- begin
'expanding option variables 47-23 (2/17/15 WC) -- begin
'expanding option variables 48-23 (10/29/15 WC) -- begin
	 'PricingData(sysid,46) = 0
	 'PricingData(sysid,47) = 0
	 'PricingData(sysid,48) = 0
	 PricingData(sysid,49) = 0
	 PricingData(sysid,50) = 0
	 PricingData(sysid,51) = 0
	 PricingData(sysid,52) = 0
	 PricingData(sysid,53) = 0
'expanding option variables 46-53 (7/9/13 WC) --end
         
End Sub

'-------------------------------------------------------------------------------
'set pricing for a configured system (institutional rates, high volume)
Sub InsDiscPricingHV (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"    
        if (kicsystem(sysid,2) = "Furniture") then    
          PricingData(sysid,30) = 3418  ' 2849 + 569 for furniture
        else
          if (kicsystem(sysid,2) = "Tabletop3") then
            PricingData(sysid,30) = 2649    'Touch Only cost $200 less
          else
            PricingData(sysid,30) = 2849
          end if                        
        end if
      case "ClickMini"
        '---- lets be smart and not do a nested shitload of if's...
        select case kicsystem(sysid,2)
          case "Furniture"
            PricingData(sysid,30) = 4581     'On Stand Unit includes $304 furniture now (5054+304)
          case "WideStand"
            PricingData(sysid,30) = 4732     'On Wide Stand includes $440 furniture now (5054+440)
          case "Tabletop1"
            PricingData(sysid,30) = 4321     'Touch On Top
          case "Tabletop2"
            PricingData(sysid,30) = 3838     'Touch On Desk And Display
          case "Tabletop3"
            PricingData(sysid,30) = 3638     'Tabletop3 -> Touch Only
          case else
            PricingData(sysid,30) = 5555     '$5555 is a warning that something went wrong 
        end select
        '---- m-kay?         
      case "Click"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 7833    '7549 + 284 for furniture
        else
          if (kicsystem(sysid,2) = "Tabletop3") then
            PricingData(sysid,30) = 6916   'Tabletop3 -> Touch Only
          else          
            if (kicsystem(sysid,2) = "Tabletop2") then
              PricingData(sysid,30) = 7116
            else
              PricingData(sysid,30) = 7549
            end if                    
          end if                 
        end if
      case "Bookeye4"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 14764   '13964 + 800 for furniture
        else
          if (kicsystem(sysid,2) = "Tabletop2") then
            PricingData(sysid,30) = 14364	  '13964 + 400 for wedge
          else
            PricingData(sysid,30) = 13964
          end if
        end if
      case "Bookeye4V3"
        if (kicsystem(sysid,2) = "Furniture") then
          PricingData(sysid,30) = 12312   '11512 + 800 for furniture
        else
          if (kicsystem(sysid,2) = "Tabletop2") then
            PricingData(sysid,30) = 12019  '11512 + 507 for wedge
          else
            PricingData(sysid,30) = 11619  '11512 + 107 for wedge
          end if
        end if
    end select
    
    'paint
    select case kicsystem(sysid,1)
      case "Pearl"
        PricingData(sysid,31) = 379
      case else
        PricingData(sysid,31) = 0
    end select
    
    'furniture
    if (kicsystem(sysid,2) = "Furniture") then 
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,32) = 0  'was 569
        case "ClickMini"
          PricingData(sysid,32) = 0  'was 260          
        case "Click"
          PricingData(sysid,32) = 0  'was 284
        case "Bookeye4"
          PricingData(sysid,32) = 0  'was 800
        case "Bookeye4V3"
          PricingData(sysid,32) = 0  'was 800          
      end select
    else
      PricingData(sysid,32) = 0
    end if
    
    'ocr
    if (kicsystem(sysid,3) = "OCR") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,33) = 379
        case "ClickMini"
          PricingData(sysid,33) = 379          
        case "Click"
          PricingData(sysid,33) = 379
        case "Bookeye4"
          PricingData(sysid,33) = 0
        case "Bookeye4V3"
          PricingData(sysid,33) = 0          
      end select
    else
      PricingData(sysid,33) = 0
    end if
    
    'tts
    if (kicsystem(sysid,4) = "TTS") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,34) = 379
        case "ClickMini"
          PricingData(sysid,34) = 379          
        case "Click"
          PricingData(sysid,34) = 379
        case "Bookeye4"
          PricingData(sysid,34) = 0
        case "Bookeye4V3"
          PricingData(sysid,34) = 0          
      end select
    else
      PricingData(sysid,34) = 0
    end if
    
    'adf
    if (kicsystem(sysid,5) = "adf") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,35) = 664
        case "ClickMini"
          PricingData(sysid,35) = 664          
        case "Click"
          PricingData(sysid,35) = 664
        case "Bookeye4"
          PricingData(sysid,35) = 664
        case "Bookeye4V3"
          PricingData(sysid,35) = 664          
      end select
    else
      PricingData(sysid,35) = 0
    end if
    
    'adf2
    if (kicsystem(sysid,6) = "adf2") then
      select case kicsystem(sysid,0)
        case "Bookeye4"
          PricingData(sysid,36) = 4749
        case "Bookeye4V3"
          PricingData(sysid,36) = 4749          
      end select
    else
      PricingData(sysid,36) = 0
    end if

    'turbo
    if (kicsystem(sysid,7) = "turbo") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,37) = 94
      end select
    else
      PricingData(sysid,37) = 0
    end if
    
    'plus
    if (kicsystem(sysid,8) = "plus") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,38) = 190
      end select
    else
      PricingData(sysid,38) = 0
    end if
    
    'pc
    if (kicsystem(sysid,9) = "PC") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          if (kicsystem(sysid,2) = "Furniture") then 
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 999  'PC for tabletop
          end if
        case "ClickMini"
          PricingData(sysid,39) = 499          
        case "Click"
          PricingData(sysid,39) = 499
        case "Bookeye4"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 799  'PC for tabletop
          end if
        case "Bookeye4V3"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,39) = 699  'PC for stand
          else
            PricingData(sysid,39) = 799  'PC for tabletop
          end if          
      end select
    else
      PricingData(sysid,39) = 0
    end if
    
    'smart dock
    select case kicsystem(sysid,10)
      case "smartdock"
        PricingData(sysid,40) = 664
      case else
        PricingData(sysid,40) = 0
    end select
    
    'foot pedal
    select case kicsystem(sysid,11)
      case "footpedal"
        select case kicsystem(sysid,0)
          case "Bookeye4"
            PricingData(sysid,41) = 0
          case "Bookeye4V3"
            PricingData(sysid,41) = 0            
          case else
            PricingData(sysid,41) = 99
        end select                              
      case else
        PricingData(sysid,41) = 0
    end select
    
    '600 dpi
    select case kicsystem(sysid,12)
      case "dpi600"
        select case kicsystem(sysid,0)
          case "Bookeye4"
            PricingData(sysid,42) = 3847
          case "Bookeye4V3"
            PricingData(sysid,42) = 2025
        end select
      case else
        PricingData(sysid,42) = 0
    end select
    
    'color
    select case kicsystem(sysid,13)
      case "color"        
        if (kicsystem(sysid,0) = "Bookeye4") then
          PricingData(sysid,43) = 1900
        else          
          PricingData(sysid,43) = 0     'color charge already included in base price of the other scanners                    
        end if          
      case else
        PricingData(sysid,43) = 0
    end select
	
    if (kicsystem(sysid,14) = "dualpc") then
    select case kicsystem(sysid,0)
       case "BookEdge"
            PricingData(sysid,44) = 0
        case "ClickMini"
          PricingData(sysid,44) = 0            
        case "Click"
          PricingData(sysid,44) = 0
        case "Bookeye4"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,44) = 0  'PC for stand
          else
            PricingData(sysid,44) = 0  'was 499 wedge for tabletop
          end if
        case "Bookeye4V3"
          if (kicsystem(sysid,2) = "Furniture") then
            PricingData(sysid,44) = 0  'PC for stand
          else                        
            if (kicsystem(sysid,2) = "Tabletop2") then
              PricingData(sysid,44) = 0   'was 307 wedge for tabletop Touch&View
            else            
              PricingData(sysid,44) = 0   'was 107 wedge for tabletop Touch only
            end if                         
          end if          
      end select
    else
    end if
      PricingData(sysid,44) = 0
	  
	  'dual video pc
    if (kicsystem(sysid,15) = "dualvideo") then
    select case kicsystem(sysid,0)
       case "BookEdge"
            'PricingData(sysid,45) = 0
            PricingData(sysid,45) = 719
        case "ClickMini"
          'PricingData(sysid,45) = 0            
          PricingData(sysid,45) = 719
        case "Click"
          'PricingData(sysid,45) = 0
          PricingData(sysid,45) = 719
        case "Bookeye4"
          'if (kicsystem(sysid,2) = "Furniture") then
          '  PricingData(sysid,45) = 0  'PC for stand
          'else
          '  PricingData(sysid,45) = 799 'PC for tabletop
          'end if
          PricingData(sysid,45) = 719
        case "Bookeye4V3"          
          PricingData(sysid,45) = 719
      end select
    else
      PricingData(sysid,45) = 0
    end if

    'view on neck
    select case kicsystem(sysid,16)
      case "neckview"
        PricingData(sysid,46) = 200
      case else
        PricingData(sysid,46) = 0
    end select
    
    'fleet management
    select case kicsystem(sysid,17)
      case "manager"
        PricingData(sysid,47) = 500 '339
        'fleet management subscription
        PricingData(sysid,48) = 59
      case else
        PricingData(sysid,47) = 0
        PricingData(sysid,48) = 0
    end select
    	
'expanding option variables 46-53 (7/9/13 WC) -- begin
'expanding option variables 47-23 (2/17/15 WC) -- begin
'expanding option variables 48-23 (10/29/15 WC) -- begin
	 'PricingData(sysid,46) = 0
	 'PricingData(sysid,47) = 0
	 'PricingData(sysid,48) = 0
	 PricingData(sysid,49) = 0
	 PricingData(sysid,50) = 0
	 PricingData(sysid,51) = 0
	 PricingData(sysid,52) = 0
	 PricingData(sysid,53) = 0
'expanding option variables 46-53 (7/9/13 WC) --end
         
End Sub

'-------------------------------------------------------------------------------
Function SystemUnitService (sysid)
    select case kicsystem(sysid,24)
      case "one"
        SystemUnitService = .099 * PricingData(sysid,24)
        PricingData(sysid,18) = PricingData(sysid,18) * 1   'we need to multiply out the subscription years to match
      case "three"					    'Ted changed the service discount - charge full years
        'SystemUnitService = .264 * PricingData(sysid,24)   'but add message customer gets extra 4 months
        SystemUnitService = .297 * PricingData(sysid,24)
        PricingData(sysid,18) = PricingData(sysid,18) * 3   'we need to multiply out the subscription years to match
      case "five"
        'SystemUnitService = .429 * PricingData(sysid,24)   'Ted changed the service discount - charge full years
        SystemUnitService = .495 * PricingData(sysid,24)    'but add message customer gets extra 8 months
        PricingData(sysid,18) = PricingData(sysid,18) * 5   'we need to multiply out the subscription years to match
    end select     
End Function

'-------------------------------------------------------------------------------
Function SystemUnitServiceActive (sysid)
  'use 54 to base service off discount price
    'select case kicsystem(sysid,54)
  'use 24 to base service off list price
    select case kicsystem(sysid,24)
      case "one"
        SystemUnitServiceActive = .099 * PricingData(sysid,54)
        PricingData(sysid,48) = PricingData(sysid,18) * 1    'we need to multiply out the subscription years to match 
      case "three"
        'SystemUnitServiceActive = .264 * PricingData(sysid,54)
        SystemUnitServiceActive = .297 * PricingData(sysid,54)
        PricingData(sysid,48) = PricingData(sysid,18) * 3    'we need to multiply out the subscription years to match
      case "five"
        'SystemUnitServiceActive = .429 * PricingData(sysid,54)
        SystemUnitServiceActive = .495 * PricingData(sysid,54)
        PricingData(sysid,48) = PricingData(sysid,18) * 5    'we need to multiply out the subscription years to match
    end select 
End Function

'-------------------------------------------------------------------------------
Function SystemUnitPrice (sysid)
  SystemUnitPrice = 0
  ' skip #17 - fleet manager does not multiply out
  ' skip #18 - fleet manager subscription is multiplied outside of unit price
  for x = 0 to 16   ' skip #24 and up
    SystemUnitPrice = SystemUnitPrice + PricingData(sysid,x)   
  next
  for x = 19 to 23   ' skip #24 and up
    SystemUnitPrice = SystemUnitPrice + PricingData(sysid,x)   
  next
  PricingData(sysid,24) = SystemUnitPrice
  PricingData(sysid,26) = SystemUnitService(sysid)
End Function

'-------------------------------------------------------------------------------
Function SystemUnitPriceActive (sysid)
  SystemUnitPriceActive = 0
  ' skip #47 - fleet manager does not multiply out
  ' skip #48 - fleet manager subscription is multiplied outside of unit price
  for x = 30 to 46   ' skip #29 and below, #54 and up
    SystemUnitPriceActive = SystemUnitPriceActive + PricingData(sysid,x)   
  next
  for x = 49 to 53   ' skip #29 and below, #54 and up
    SystemUnitPriceActive = SystemUnitPriceActive + PricingData(sysid,x)   
  next
  PricingData(sysid,54) = SystemUnitPriceActive
  
  'we need to get the unit discount from list for calc later
  PricingData(sysid,55) = PricingData(sysid,24) - PricingData(sysid,54) 
  
  PricingData(sysid,56) = SystemUnitServiceActive(sysid)
End Function

'-------------------------------------------------------------------------------
Function SystemTotalPrice (sysid)
  SysQty = kicsystem(sysid,25) 
  SystemTotalPrice = PricingData(sysid,24) * SysQty 
  PricingData(sysid,27) = SystemTotalPrice
  PricingData(sysid,28) = PricingData(sysid,25) * SysQty
  PricingData(sysid,29) = PricingData(sysid,26) * SysQty
  'we need to extend out the subscription fees too
  'PricingData(sysid,18) = PricingData(sysid,18) * SysQty
  PricingData(sysid,48) = PricingData(sysid,18) * SysQty
End Function

'-------------------------------------------------------------------------------
Function SystemTotalPriceActive (sysid)
  SysQty = kicsystem(sysid,25) 
  SystemTotalPriceActive = PricingData(sysid,54) * SysQty 
  PricingData(sysid,57) = SystemTotalPriceActive
  
  'active total discount = active unit discount * qty
  PricingData(sysid,58) = PricingData(sysid,55) * SysQty
  
  PricingData(sysid,59) = PricingData(sysid,56) * SysQty
  
  'we need to extend out the subscription fees too
  'PricingData(sysid,18) = PricingData(sysid,18) * SysQty
  PricingData(sysid,48) = PricingData(sysid,18) * SysQty
End Function

'-------------------------------------------------------------------------------
'main loop begins

dim PricingData(4,60) 
'PricingData (0-29 = list pricing, 30-59 = active pricing)
'0-base price of model
'1-paint
'2-furniture
'3-ocr
'4-tts
'5-adf
'6-adf2
'7-turbo
'8-plus
'9-pc
'10-smartdock
'11-footpedal
'12-dpi
'13-color
'14-dual monitor w/wedge
'15-PC w/dual video cards
'16-view on neck (02/17/2015)
'17-fleet management (10/29/2015)
'18-fleet manager subscription fee (6/28/2016)
'19-future option slot
'20-future option slot
'21-future option slot
'22-future option slot
'23-future option slot
'24-unit price
'25-unit discount
'26-unit service
'27-extended price
'28-extended discount
'29-extended service
'60-5-year qty service ***

'---------------------------------------
'load in the current state of the form
dim InsDcode
InsDcode = Request.QueryString("InsDcode")
'InsDcode = 0
dim kicsystem(4,25)
systemlist = array("system1","system2","system3","system4","system5")
s=0
for each sysinput in systemlist
  temp = split(Request.QueryString(sysinput),";")
  for x = 0 to 25
    kicsystem(s,x) = temp(x) 
  next
  s=s+1
next

'---------------------------------------
'check for "package" exceptions
'TBA, see crazy spreadsheet

'---------------------------------------
'build list pricing
for sysid = 0 to 4
  ListPricing sysid
  SystemUnitPrice(sysid)
  SystemTotalPrice(sysid) 
next

'---------------------------------------
'find total build value
TBV = 0
for sysid = 0 to 4
  'not including service
    'TBV = TBV + PricingData(sysid,27)
  'including service
    TBV = TBV + PricingData(sysid,27) + PricingData(sysid,28)  
next

'---------------------------------------
'select and run active pricing
for sysid = 0 to 4
  if (TBV > 50000) then
  're-build pricing with high volume pricing values
    if (InsDcode > 0) then
      InsDiscPricingHV sysid
    else
      ListPricingHV sysid
    end if
  else
    if (InsDcode > 0) then
      InsDiscPricing sysid
    else
      'copy list pricing to active
      for c = 0 to 29
        PricingData(sysid,c+30) = PricingData(sysid,c)
      next    
    end if
  end if
  SystemUnitPriceActive(sysid)
  PricingData(sysid,55) = PricingData(sysid,24) - PricingData(sysid,54)   
  SystemTotalPriceActive(sysid)
  PricingData(sysid,58) = PricingData(sysid,55) * kicsystem(sysid,25)
  PricingData(sysid,60) = .429 * (PricingData(sysid,57) - PricingData(sysid,58))     
next

'-------------------------------------------------------------------------------
'done, send answer

'Response.Write("Response <br>")
'build the response data to send back to the client
  'Response.Write(PricingData)
  for x = 0 to 4 
    for y = 0 to 60 
      Response.Write(PricingData(x,y) & ";")
    next
    Response.Write("<br>")
    'Response.Write(":<br>")
  next
    
'TXTAM1162541578   
%> 