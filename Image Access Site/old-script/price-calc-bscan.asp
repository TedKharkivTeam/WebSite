<%@ LANGUAGE="VBScript" %>
<% 
'-------------------------------------------------------------------------------
'set pricing for a configured system (list rates)
Sub ListPricing (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"                       
        PricingData(sysid,0) = 3332
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,0) = PricingData(sysid,0) + 1199
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,0) = PricingData(sysid,0) + 999
        end if
      case "ClickMini"                
        PricingData(sysid,0) = 4999  
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,0) = PricingData(sysid,0) + 1199
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,0) = PricingData(sysid,0) + 999
        end if           
      case "Bookeye4v3"
        PricingData(sysid,0) = 14442
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,0) = PricingData(sysid,0) + 1199
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,0) = PricingData(sysid,0) + 999
        end if        
      case "Bookeye4v2"        
        PricingData(sysid,0) = 16109
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,0) = PricingData(sysid,0) + 1199
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,0) = PricingData(sysid,0) + 999
        end if        
      case "Bookeye4v1"                
        PricingData(sysid,0) = 31109
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,0) = PricingData(sysid,0) + 1199
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,0) = PricingData(sysid,0) + 999
        end if        
      case "WT25"                
        PricingData(sysid,0) = 14442
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,0) = PricingData(sysid,0) + 1199
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,0) = PricingData(sysid,0) + 999
        end if        
      case "BECM"                
        PricingData(sysid,0) = 6999    
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,0) = PricingData(sysid,0) + 1199
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,0) = PricingData(sysid,0) + 999
        end if                    
    end select
    
    'ocr
    if (kicsystem(sysid,1) = "OCR") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,1) = 499
        case "ClickMini"
          PricingData(sysid,1) = 499          
        case "Bookeye4v3"
          PricingData(sysid,1) = 0
        case "Bookeye4v2"
          PricingData(sysid,1) = 0          
        case "Bookeye4v1"
          PricingData(sysid,1) = 0                    
        case "WT25"
          PricingData(sysid,1) = 0          
        case "BECM"
          PricingData(sysid,1) = 499
      end select
    else
      PricingData(sysid,1) = 0
    end if
    
    
    'dualpc = Touch&View monitor 
    if (kicsystem(sysid,2) = "dualpc") then       
        PricingData(sysid,2) = 0   'price part of base list price       
    else
        PricingData(sysid,2) = 0  
    end if
    
    'pc = Single Touch monitor 
    if (kicsystem(sysid,3) = "PC") then       
        PricingData(sysid,3) = 0   'price part of base list price       
    else
        PricingData(sysid,3) = 0  
    end if
    
    'foot pedal
    select case kicsystem(sysid,4)
      case "footpedal"
        select case kicsystem(sysid,0)          
          case "Bookeye4v3"
            PricingData(sysid,4) = 0
          case "Bookeye4v2"
            PricingData(sysid,4) = 0                    
          case else
            PricingData(sysid,4) = 119
        end select
      case else
        PricingData(sysid,4) = 0
    end select
        
    
    '600 dpi
    select case kicsystem(sysid,5)
      case "dpi600"
      
        select case kicsystem(sysid,0)        
          case "Bookeye4v3"
           PricingData(sysid,5) = 2250
          case "Bookeye4v2"
           PricingData(sysid,5) = 4500
          case else
           'for widetek the 600dpi is included in base price
           'the other scanners do not support 600dpi
           PricingData(sysid,5) = 0                        
        end select      
                    
      case else
        PricingData(sysid,5) = 0
    end select        
        
    'color
    select case kicsystem(sysid,6)
      case "color"
        select case kicsystem(sysid,0)                
          case "Bookeye4v2"
           ' BE4 V3 and WT25 include color in base price
           PricingData(sysid,6) = 3200
          case "Bookeye4v1"
           PricingData(sysid,6) = 7560
          case else
           PricingData(sysid,6) = 0
        end select      
      case else
        PricingData(sysid,6) = 0
    end select
            
    'Free Flow Lite Upgrade
    select case kicsystem(sysid,7)
      case "freeflowlite"                
        select case kicsystem(sysid,0)
          case "BookEdge"
            PricingData(sysid,7) = 1109
          case "ClickMini"
            PricingData(sysid,7) = 1109
          case "Bookeye4v3"
            PricingData(sysid,7) = 1109
          case "Bookeye4v2"
            PricingData(sysid,7) = 1109
          case "Bookeye4v1"
            PricingData(sysid,7) = 1109
          case "WT25"
            PricingData(sysid,7) = 1109
          case "BECM"
            PricingData(sysid,7) = 1109
          case else
            PricingData(sysid,7) = 0          
         end select        
        
      case else
        PricingData(sysid,7) = 0
    end select

    'Free Flow Upgrade
    select case kicsystem(sysid,8)
      case "freeflow"
        select case kicsystem(sysid,0)
          case "BookEdge"
            PricingData(sysid,8) = 4067
          case "ClickMini"
            PricingData(sysid,8) = 4067
          case "Bookeye4v3"
            PricingData(sysid,8) = 4067
          case "Bookeye4v2"
            PricingData(sysid,8) = 4067
          case "Bookeye4v1"
            PricingData(sysid,8) = 4067
          case "WT25"
            PricingData(sysid,8) = 4067            
          case "BECM"
            PricingData(sysid,8) = 4067
          case else
            PricingData(sysid,8) = 0          
         end select        
        
      case else
        PricingData(sysid,8) = 0
    end select                
            
    'Additional BSCAN ILL license
    select case kicsystem(sysid,9)
      case "addlic"
        if (kicsystem(sysid,0) = "BECM") then
          PricingData(sysid,9) = 1109
        else
          PricingData(sysid,9) = 0
        end if  
      case else
        PricingData(sysid,9) = 0
    end select

    'dualvideo - Intel PC(NUC)
    select case kicsystem(sysid,10)
      case "dualvideo"
        PricingData(sysid,10) = 799
      case else
        PricingData(sysid,10) = 0
    end select

    'View Monitor on Neck
    select case kicsystem(sysid,11)
      case "neckview"        
        
        select case kicsystem(sysid,0)        
          case "Bookeye4v3"
           PricingData(sysid,11) = 200
          case "Bookeye4v2"
           PricingData(sysid,11) = 200
          case "Bookeye4v1"
           PricingData(sysid,11) = 300
          case else
           PricingData(sysid,11) = 0                        
        end select 
                
      case else
        PricingData(sysid,11) = 0
    end select
            	
'expanding option variables 10-23 (5/17/2015 WC) -- begin
'expanding option variables 12-23 (7/27/2015 WC) -- begin
	 PricingData(sysid,12) = 0
	 PricingData(sysid,13) = 0
	 PricingData(sysid,14) = 0
	 PricingData(sysid,15) = 0
	 PricingData(sysid,16) = 0
	 PricingData(sysid,17) = 0
	 PricingData(sysid,18) = 0
	 PricingData(sysid,19) = 0
	 PricingData(sysid,20) = 0
	 PricingData(sysid,21) = 0
	 PricingData(sysid,22) = 0
	 PricingData(sysid,23) = 0
	
    'unit discount amount ($0 for list pricing)
    PricingData(sysid,25) = 0
         
End Sub

'-------------------------------------------------------------------------------
'set pricing for a configured system (list rates, high volume)
Sub ListPricingHV (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"                       
        PricingData(sysid,30) = 3165
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1139
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 949
        end if
      case "ClickMini"                
        PricingData(sysid,30) = 4749  
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1139
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 949
        end if           
      case "Bookeye4v3"
        PricingData(sysid,30) = 13720
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1139
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 949
        end if        
      case "Bookeye4v2"        
        PricingData(sysid,30) = 15304
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1139
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 949
        end if        
      case "Bookeye4v1"                
        PricingData(sysid,30) = 29554
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1139
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 949
        end if        
      case "WT25"                
        PricingData(sysid,30) = 13720
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1139
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 949
        end if        
      case "BECM"                
        PricingData(sysid,30) = 6649    
        
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1139
        end if
        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 949
        end if                    
    end select
    
    'ocr
    if (kicsystem(sysid,1) = "OCR") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,31) = 474
        case "ClickMini"
          PricingData(sysid,31) = 474          
        case "Bookeye4v3"
          PricingData(sysid,31) = 0
        case "Bookeye4v2"
          PricingData(sysid,31) = 0          
        case "Bookeye4v1"
          PricingData(sysid,31) = 0                    
        case "WT25"
          PricingData(sysid,31) = 0          
        case "BECM"
          PricingData(sysid,31) = 474
      end select
    else
      PricingData(sysid,31) = 0
    end if
        
    'dualpc = Touch&View monitor 
    if (kicsystem(sysid,2) = "dualpc") then       
        PricingData(sysid,32) = 0   'price part of base list price       
    else
        PricingData(sysid,32) = 0  
    end if
    
    'pc = Single Touch monitor 
    if (kicsystem(sysid,3) = "PC") then       
        PricingData(sysid,33) = 0   'price part of base list price       
    else
        PricingData(sysid,33) = 0  
    end if
    
    'foot pedal
    select case kicsystem(sysid,4)
      case "footpedal"
        PricingData(sysid,34) = 113
      case else
        PricingData(sysid,34) = 0
    end select
    
    '600 dpi
    select case kicsystem(sysid,5)
      case "dpi600"
        select case kicsystem(sysid,0)        
          case "Bookeye4v3"
           PricingData(sysid,35) = 2138
          case "Bookeye4v2"
           PricingData(sysid,35) = 4275
          case else
           'for widetek the 600dpi is included in base price
           'the other scanners do not support 600dpi
           PricingData(sysid,35) = 0                        
        end select  
      case else
        PricingData(sysid,35) = 0
    end select   
    
    'color
    select case kicsystem(sysid,6)
      case "color"                
        select case kicsystem(sysid,0)
          case "Bookeye4v2"
           ' BE4 V3 and WT25 include color in base price
           PricingData(sysid,36) = 3040
          case "Bookeye4v1"
           PricingData(sysid,36) = 7182
          case else
           PricingData(sysid,36) = 0
        end select        
      case else
        PricingData(sysid,36) = 0
    end select

    'Free Flow Lite Upgrade
    select case kicsystem(sysid,7)
      case "freeflowlite"
        select case kicsystem(sysid,0)
          case "BookEdge"
            PricingData(sysid,37) = 1054
          case "ClickMini"
            PricingData(sysid,37) = 1054
          case "Bookeye4v3"
            PricingData(sysid,37) = 1054
          case "Bookeye4v2"
            PricingData(sysid,37) = 1054
          case "Bookeye4v1"
            PricingData(sysid,37) = 1054
          case "WT25"
            PricingData(sysid,37) = 1054
          case "BECM"
            PricingData(sysid,37) = 1054
          case else
            PricingData(sysid,37) = 0          
         end select
      case else
        PricingData(sysid,37) = 0
    end select
    
    'Free Flow Upgrade
    select case kicsystem(sysid,8)
      case "freeflow"
        select case kicsystem(sysid,0)
          case "BookEdge"
            PricingData(sysid,38) = 3864
          case "ClickMini"
            PricingData(sysid,38) = 3864
          case "Bookeye4v3"
            PricingData(sysid,38) = 3864
          case "Bookeye4v2"
            PricingData(sysid,38) = 3864
          case "Bookeye4v1"
            PricingData(sysid,38) = 3864
          case "WT25"
            PricingData(sysid,38) = 3864
          case "BECM"
            PricingData(sysid,38) = 3864
          case else
            PricingData(sysid,38) = 0          
         end select
      case else
        PricingData(sysid,38) = 0
    end select 
    
    'Additional BSCAN ILL license
    select case kicsystem(sysid,9)
      case "addlic"
        if (kicsystem(sysid,0) = "BECM") then
          PricingData(sysid,39) = 1054
        else
          PricingData(sysid,39) = 0
        end if  
      case else
        PricingData(sysid,39) = 0
    end select
         	
    'dualvideo - Intel PC(NUC)
    select case kicsystem(sysid,10)
      case "dualvideo"
        PricingData(sysid,40) = 759
      case else
        PricingData(sysid,40) = 0
    end select

    'View Monitor on Neck
    select case kicsystem(sysid,11)
      case "neckview"
        select case kicsystem(sysid,0)        
          case "Bookeye4v3"
           PricingData(sysid,41) = 190
          case "Bookeye4v2"
           PricingData(sysid,41) = 190
          case "Bookeye4v1"
           PricingData(sysid,41) = 285
          case else
           PricingData(sysid,41) = 0                        
        end select 
      case else
        PricingData(sysid,41) = 0
    end select
             	
'expanding option variables 40-53 (5/17/2015 WC) -- begin	 
'expanding option variables 42-53 (7/27/2015 WC) -- begin	 
	 PricingData(sysid,42) = 0
	 PricingData(sysid,43) = 0
	 PricingData(sysid,44) = 0
	 PricingData(sysid,45) = 0
	 PricingData(sysid,46) = 0
	 PricingData(sysid,47) = 0
	 PricingData(sysid,48) = 0
	 PricingData(sysid,49) = 0
	 PricingData(sysid,50) = 0
	 PricingData(sysid,51) = 0
	 PricingData(sysid,22) = 0
	 PricingData(sysid,53) = 0	 	 	 
         
End Sub

'-------------------------------------------------------------------------------                                                                                
'set pricing for a configured system (institutional rates)
Sub InsDiscPricing (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"        
        PricingData(sysid,30) = 2999
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1079
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 899
        end if                                           
      case "ClickMini"                
        PricingData(sysid,30) = 4499
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1079
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 899
        end if         
      case "Bookeye4v3"
        PricingData(sysid,30) = 12999
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1079
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 899
        end if         
      case "Bookeye4v2"        
        PricingData(sysid,30) = 14499
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1079
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 899
        end if         
      case "Bookeye4v1"                
        PricingData(sysid,30) = 27998
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1079
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 899
        end if         
      case "WT25"                
        PricingData(sysid,30) = 12999
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1079
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 899
        end if         
      case "BECM"                
        PricingData(sysid,30) = 6299  
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1079
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 899
        end if                                         
    end select    
    
    'ocr
    if (kicsystem(sysid,1) = "OCR") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,31) = 399
        case "ClickMini"
          PricingData(sysid,31) = 399          
        case "Bookeye4v3"
          PricingData(sysid,31) = 0
        case "Bookeye4v2"
          PricingData(sysid,31) = 0          
        case "Bookeye4v1"
          PricingData(sysid,31) = 0                    
        case "WT25"
          PricingData(sysid,31) = 0          
        case "BECM"
          PricingData(sysid,31) = 399
      end select
    else
      PricingData(sysid,31) = 0
    end if
    
    'dualpc = Touch&View monitor 
    if (kicsystem(sysid,2) = "dualpc") then       
        PricingData(sysid,32) = 0   'price part of base list price       
    else
        PricingData(sysid,32) = 0  
    end if
    
    'pc = Single Touch monitor 
    if (kicsystem(sysid,3) = "PC") then       
        PricingData(sysid,33) = 0   'price part of base list price       
    else
        PricingData(sysid,33) = 0  
    end if
    
    'foot pedal
    select case kicsystem(sysid,4)
      case "footpedal"
        PricingData(sysid,34) = 99
      case else
        PricingData(sysid,34) = 0
    end select
    
    '600 dpi
    select case kicsystem(sysid,5)
      case "dpi600"
        
        select case kicsystem(sysid,0)        
          case "Bookeye4v3"
           PricingData(sysid,35) = 2025
          case "Bookeye4v2"
           PricingData(sysid,35) = 4050
          case else
           'for widetek the 600dpi is included in base price
           'the other scanners do not support 600dpi
           PricingData(sysid,35) = 0                        
        end select         
                
      case else
        PricingData(sysid,35) = 0
    end select   
    
    'color
    select case kicsystem(sysid,6)
      case "color"                       
        
        select case kicsystem(sysid,0)
          case "Bookeye4v2"
           ' BE4 V3 and WT25 include color in base price
           PricingData(sysid,36) = 2849
          case "Bookeye4v1"
           PricingData(sysid,36) = 6728
          case else
           PricingData(sysid,36) = 0
        end select                
        
      case else
        PricingData(sysid,36) = 0
    end select

    'Free Flow Lite Upgrade
    select case kicsystem(sysid,7)
      case "freeflowlite"
        
        select case kicsystem(sysid,0)
          case "BookEdge"
            PricingData(sysid,37) = 999
          case "ClickMini"
            PricingData(sysid,37) = 999
          case "Bookeye4v3"
            PricingData(sysid,37) = 999
          case "Bookeye4v2"
            PricingData(sysid,37) = 999
          case "Bookeye4v1"
            PricingData(sysid,37) = 999
          case "WT25"
            PricingData(sysid,37) = 999            
          case "BECM"
            PricingData(sysid,37) = 999
          case else
            PricingData(sysid,37) = 0          
         end select                 
        
      case else
        PricingData(sysid,37) = 0
    end select
    
    'Free Flow Upgrade
    select case kicsystem(sysid,8)
      case "freeflow"
        
        select case kicsystem(sysid,0)
          case "BookEdge"
            PricingData(sysid,38) = 3660
          case "ClickMini"
            PricingData(sysid,38) = 3660
          case "Bookeye4v3"
            PricingData(sysid,38) = 3660
          case "Bookeye4v2"
            PricingData(sysid,38) = 3660
          case "Bookeye4v1"
            PricingData(sysid,38) = 3660
          case "WT25"
            PricingData(sysid,38) = 3660
          case "BECM"
            PricingData(sysid,38) = 3660
          case else
            PricingData(sysid,38) = 0          
        end select        
      case else
        PricingData(sysid,38) = 0
    end select 
    
    'Additional BSCAN ILL license
    select case kicsystem(sysid,9)
      case "addlic"        
        if (kicsystem(sysid,0) = "BECM") then
          PricingData(sysid,39) = 999
        else
          PricingData(sysid,39) = 0
        end if        
      case else
        PricingData(sysid,39) = 0
    end select
    	
    'dualvideo - Intel PC(NUC)
    select case kicsystem(sysid,10)
      case "dualvideo"
        PricingData(sysid,40) = 719
      case else
        PricingData(sysid,40) = 0
    end select

    'View Monitor on Neck
    select case kicsystem(sysid,11)
      case "neckview"        
        
        select case kicsystem(sysid,0)        
          case "Bookeye4v3"
           PricingData(sysid,41) = 180
          case "Bookeye4v2"
           PricingData(sysid,41) = 180
          case "Bookeye4v1"
           PricingData(sysid,41) = 270
          case else
           PricingData(sysid,41) = 0                        
        end select 
                
      case else
        PricingData(sysid,41) = 0
    end select
        	
'expanding option variables 40-53 (5/17/2015 WC) -- begin	 
'expanding option variables 42-53 (7/27/2015 WC) -- begin	 
	 PricingData(sysid,42) = 0
	 PricingData(sysid,43) = 0
	 PricingData(sysid,44) = 0
	 PricingData(sysid,45) = 0
	 PricingData(sysid,46) = 0
	 PricingData(sysid,47) = 0
	 PricingData(sysid,48) = 0
	 PricingData(sysid,49) = 0
	 PricingData(sysid,50) = 0
	 PricingData(sysid,51) = 0
	 PricingData(sysid,22) = 0
	 PricingData(sysid,53) = 0	
         
End Sub

'-------------------------------------------------------------------------------
'set pricing for a configured system (institutional rates, high volume)
Sub InsDiscPricingHV (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"        
        PricingData(sysid,30) = 2849
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1025
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 854
        end if                                           
      case "ClickMini"                
        PricingData(sysid,30) = 4274
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1025
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 854
        end if         
      case "Bookeye4v3"
        PricingData(sysid,30) = 12349
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1025
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 854
        end if         
      case "Bookeye4v2"        
        PricingData(sysid,30) = 13774
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1025
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 854
        end if         
      case "Bookeye4v1"                
        PricingData(sysid,30) = 26598
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1025
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 854
        end if         
      case "WT25"                
        PricingData(sysid,30) = 12349
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1025
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 854
        end if         
      case "BECM"                
        PricingData(sysid,30) = 5984  
        'dualpc = Touch&View monitor 
        if (kicsystem(sysid,2) = "dualpc") then       
           PricingData(sysid,30) = PricingData(sysid,30) + 1025
        end if        
        'pc = Single Touch monitor 
        if (kicsystem(sysid,3) = "PC") then               
           PricingData(sysid,30) = PricingData(sysid,30) + 854
        end if                                         
    end select    
    
    'ocr
    if (kicsystem(sysid,1) = "OCR") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,31) = 379
        case "ClickMini"
          PricingData(sysid,31) = 379          
        case "Bookeye4v3"
          PricingData(sysid,31) = 0
        case "Bookeye4v2"
          PricingData(sysid,31) = 0          
        case "Bookeye4v1"
          PricingData(sysid,31) = 0                    
        case "WT25"
          PricingData(sysid,31) = 0          
        case "BECM"
          PricingData(sysid,31) = 379
      end select
    else
      PricingData(sysid,31) = 0
    end if
        
    'dualpc = Touch&View monitor 
    if (kicsystem(sysid,2) = "dualpc") then       
        PricingData(sysid,32) = 0   'price part of base list price       
    else
        PricingData(sysid,32) = 0  
    end if
    
    'pc = Single Touch monitor 
    if (kicsystem(sysid,3) = "PC") then       
        PricingData(sysid,33) = 0   'price part of base list price       
    else
        PricingData(sysid,33) = 0  
    end if
    
    'foot pedal
    select case kicsystem(sysid,4)
      case "footpedal"
        PricingData(sysid,34) = 94
      case else
        PricingData(sysid,34) = 0
    end select
    
    '600 dpi
    select case kicsystem(sysid,5)
      case "dpi600"
        select case kicsystem(sysid,0)        
          case "Bookeye4v3"
           PricingData(sysid,35) = 1924
          case "Bookeye4v2"
           PricingData(sysid,35) = 2736     'was 3847
          case else
           'for widetek the 600dpi is included in base price
           'the other scanners do not support 600dpi
           PricingData(sysid,35) = 0                        
        end select 
      case else
        PricingData(sysid,35) = 0
    end select   
    
    'color
    select case kicsystem(sysid,6)
      case "color"
        if (kicsystem(sysid,0) = "Bookeye4v2") then             
           ' BE4 V3 and WT25 include color in base price
           PricingData(sysid,36) = 2707
        else
           PricingData(sysid,36) = 0
        end if
        
        select case kicsystem(sysid,0)
          case "Bookeye4v2"
           ' BE4 V3 and WT25 include color in base price
           PricingData(sysid,36) = 2707
          case "Bookeye4v1"
           PricingData(sysid,36) = 6392
          case else
           PricingData(sysid,36) = 0
        end select 
                
      case else
        PricingData(sysid,36) = 0
    end select

    'Free Flow Lite Upgrade
    select case kicsystem(sysid,7)
      case "freeflowlite"
         select case kicsystem(sysid,0)
          case "BookEdge"
            PricingData(sysid,37) = 949
          case "ClickMini"
            PricingData(sysid,37) = 949
          case "Bookeye4v3"
            PricingData(sysid,37) = 949
          case "Bookeye4v2"
            PricingData(sysid,37) = 949
          case "Bookeye4v1"
            PricingData(sysid,37) = 949
          case "WT25"
            PricingData(sysid,37) = 949                        
          case "BECM"
            PricingData(sysid,37) = 949
          case else
            PricingData(sysid,37) = 0          
         end select 
      case else
        PricingData(sysid,37) = 0
    end select
    
    'Free Flow Upgrade
    select case kicsystem(sysid,8)
      case "freeflow"
        select case kicsystem(sysid,0)
          case "BookEdge"
            PricingData(sysid,38) = 3477
          case "ClickMini"
            PricingData(sysid,38) = 3477
          case "Bookeye4v3"
            PricingData(sysid,38) = 3477
          case "Bookeye4v2"
            PricingData(sysid,38) = 3477
          case "Bookeye4v1"
            PricingData(sysid,38) = 3477
          case "WT25"
            PricingData(sysid,38) = 3477
          case "BECM"
            PricingData(sysid,38) = 3477
          case else
            PricingData(sysid,38) = 0          
        end select 
      case else
        PricingData(sysid,38) = 0
    end select 
    
    'Additional BSCAN ILL license
    select case kicsystem(sysid,9)
      case "addlic"
        if (kicsystem(sysid,0) = "BECM") then
          PricingData(sysid,39) = 949
        else
          PricingData(sysid,39) = 0
        end if 
      case else
        PricingData(sysid,39) = 0
    end select
    	
    'dualvideo - Intel PC(NUC)
    select case kicsystem(sysid,10)
      case "dualvideo"
        PricingData(sysid,40) = 683
      case else
        PricingData(sysid,40) = 0
    end select

    'View Monitor on Neck
    select case kicsystem(sysid,11)
      case "neckview"
        select case kicsystem(sysid,0)        
          case "Bookeye4v3"
           PricingData(sysid,41) = 171
          case "Bookeye4v2"
           PricingData(sysid,41) = 171
          case "Bookeye4v1"
           PricingData(sysid,41) = 257
          case else
           PricingData(sysid,41) = 0                        
        end select 
      case else
        PricingData(sysid,41) = 0
    end select
        	
'expanding option variables 40-53 (5/17/2015 WC) -- begin	 
'expanding option variables 42-53 (7/27/2015 WC) -- begin	 
	 PricingData(sysid,42) = 0
	 PricingData(sysid,43) = 0
	 PricingData(sysid,44) = 0
	 PricingData(sysid,45) = 0
	 PricingData(sysid,46) = 0
	 PricingData(sysid,47) = 0
	 PricingData(sysid,48) = 0
	 PricingData(sysid,49) = 0
	 PricingData(sysid,50) = 0
	 PricingData(sysid,51) = 0
	 PricingData(sysid,22) = 0
	 PricingData(sysid,53) = 0	
         
End Sub

'-------------------------------------------------------------------------------
Function SystemUnitService (sysid)
    select case kicsystem(sysid,24)
      case "one"
        SystemUnitService = .099 * PricingData(sysid,24) 
      case "three"
        SystemUnitService = .297 * PricingData(sysid,24)
      case "five"
        SystemUnitService = .495 * PricingData(sysid,24)
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
      case "three"
        SystemUnitServiceActive = .297 * PricingData(sysid,54)
      case "five"
        SystemUnitServiceActive = .495 * PricingData(sysid,54)
    end select 
End Function

'-------------------------------------------------------------------------------
Function SystemUnitPrice (sysid)
  SystemUnitPrice = 0
  for x = 0 to 23   ' skip #24 and up
    SystemUnitPrice = SystemUnitPrice + PricingData(sysid,x)   
  next
  PricingData(sysid,24) = SystemUnitPrice
  PricingData(sysid,26) = SystemUnitService(sysid)
End Function

'-------------------------------------------------------------------------------
Function SystemUnitPriceActive (sysid)
  SystemUnitPriceActive = 0
  for x = 30 to 53   ' skip #29 and below, #54 and up
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
End Function

'-------------------------------------------------------------------------------
Function SystemTotalPriceActive (sysid)
  SysQty = kicsystem(sysid,25) 
  SystemTotalPriceActive = PricingData(sysid,54) * SysQty 
  PricingData(sysid,57) = SystemTotalPriceActive
  
  'active total discount = active unit discount * qty
  PricingData(sysid,58) = PricingData(sysid,55) * SysQty
  
  PricingData(sysid,59) = PricingData(sysid,56) * SysQty
End Function

'-------------------------------------------------------------------------------
'main loop begins

dim PricingData(4,60) 
'PricingData (0-29 = list pricing, 30-59 = active pricing)
'0-base price of model
'1-ocr
'2-dualpc (touch&view monitor w/wedge)
'3-pc     (single touch monitor w/wedge)
'4-footpedal
'5-dpi
'6-color
'7-freeflowlite
'8-freeflow
'9-addlic

'10-dualvideo  (intel PC)
'11-neckview

'12-future option slot
'13-future option slot
'14-future option slot
'15-future option slot
'16-future option slot
'17-future option slot
'18-future option slot
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