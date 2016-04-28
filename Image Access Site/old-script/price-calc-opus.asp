<%@ LANGUAGE="VBScript" %>
<% 
'-------------------------------------------------------------------------------
'set pricing for a configured system (list rates)
Sub ListPricing (sysid)
    
    'model
    select case kicsystem(sysid,0)
      case "BookEdge"        
        'if (kicsystem(sysid,2) = "Furniture") then
        '    PricingData(sysid,0) = 4498  'includes $749 furniture now (3749+749)
        'else
        '  if (kicsystem(sysid,2) = "Tabletop3") then
        '    PricingData(sysid,0) = 3549    'Touch Only cost $200 less
        '  else
        '    PricingData(sysid,0) = 3749
        ' end if        
        'end if        
        PricingData(sysid,0) = 3749
      case "Bookeye4v3"
        PricingData(sysid,0) = 9999
      case "Bookeye4v2"        
        PricingData(sysid,0) = 12299
      case "Bookeye4v1"                
        PricingData(sysid,0) = 19508
      case "WT25"                
        PricingData(sysid,0) = 10000                
    end select
    
    'FreeFlow PDF Module
    if (kicsystem(sysid,1) = "pdf") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,1) = 0
        case "Bookeye4v3"
          PricingData(sysid,1) = 0
        case "Bookeye4v2"
          PricingData(sysid,1) = 0          
        case "Bookeye4v1"
          PricingData(sysid,1) = 0                    
        case "WT25"
          PricingData(sysid,1) = 0          
      end select
    else
      PricingData(sysid,1) = 0
    end if
    
    
    'FF Image Enh. Module (auto IT)
    if (kicsystem(sysid,2) = "imagetreat") then       
        PricingData(sysid,2) = 0   
    else
        PricingData(sysid,2) = 0  
    end if
    
    'FF OCR/Search PDF+Audio Mod.
    if (kicsystem(sysid,3) = "ocr") then       
        PricingData(sysid,3) = 0   
    else
        PricingData(sysid,3) = 0  
    end if
    
    'FF Batch Module (incl.Batch Imp.)
    select case kicsystem(sysid,4)
      case "batch"
        PricingData(sysid,4) = 0
      case else
        PricingData(sysid,4) = 0
    end select
        
    
    'Hierarchical Metadata
    select case kicsystem(sysid,5)
      case "metadata"
        PricingData(sysid,5) = 0
      case else
        PricingData(sysid,5) = 0
    end select        
        
    'Workflow
    select case kicsystem(sysid,6)
      case "workflow"
        PricingData(sysid,6) = 0
      case else
        PricingData(sysid,6) = 0
    end select
            
    'Automatic Archival
    select case kicsystem(sysid,7)
      case "archive"
        PricingData(sysid,7) = 0
      case else
        PricingData(sysid,7) = 0
    end select

    'Data Migration
    select case kicsystem(sysid,8)
      case "migration"
        PricingData(sysid,8) = 0
      case else
        PricingData(sysid,8) = 0
    end select
                                  	
'expanding option variables 9-23 (8/13/2015 WC) -- begin         
	 PricingData(sysid,9) = 0
         PricingData(sysid,10) = 0
	 PricingData(sysid,11) = 0
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
        'if (kicsystem(sysid,2) = "Furniture") then
        '    PricingData(sysid,30) = 4498  'includes $749 furniture now (3749+749)
        'else
        '  if (kicsystem(sysid,2) = "Tabletop3") then
        '    PricingData(sysid,30) = 3549    'Touch Only cost $200 less
        '  else
        '    PricingData(sysid,30) = 3749
        ' end if        
        'end if        
        PricingData(sysid,30) = 3749                          
      case "Bookeye4v3"
        PricingData(sysid,30) = 9999
      case "Bookeye4v2"        
        PricingData(sysid,30) = 12299
      case "Bookeye4v1"                
        PricingData(sysid,30) = 19508
      case "WT25"                
        PricingData(sysid,30) = 10000        
    end select
        
    'FreeFlow PDF Module
    if (kicsystem(sysid,1) = "pdf") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,31) = 0
        case "Bookeye4v3"
          PricingData(sysid,31) = 0
        case "Bookeye4v2"
          PricingData(sysid,31) = 0          
        case "Bookeye4v1"
          PricingData(sysid,31) = 0                    
        case "WT25"
          PricingData(sysid,31) = 0          
      end select
    else
      PricingData(sysid,31) = 0
    end if        
                
    'FF Image Enh. Module (auto IT)
    if (kicsystem(sysid,2) = "imagetreat") then       
        PricingData(sysid,32) = 0   
    else
        PricingData(sysid,32) = 0  
    end if
    
    'FF OCR/Search PDF+Audio Mod.
    if (kicsystem(sysid,3) = "ocr") then       
        PricingData(sysid,33) = 0   
    else
        PricingData(sysid,33) = 0  
    end if
    
    'FF Batch Module (incl.Batch Imp.)
    select case kicsystem(sysid,4)
      case "batch"
        PricingData(sysid,34) = 0
      case else
        PricingData(sysid,34) = 0
    end select
    
    'Hierarchical Metadata
    select case kicsystem(sysid,5)
      case "metadata"
        PricingData(sysid,35) = 0
      case else
        PricingData(sysid,35) = 0
    end select   
    
    'Workflow
    select case kicsystem(sysid,6)
      case "workflow"
        PricingData(sysid,36) = 0
      case else
        PricingData(sysid,36) = 0
    end select

    'Automatic Archival
    select case kicsystem(sysid,7)
      case "archive"
        PricingData(sysid,37) = 0
      case else
        PricingData(sysid,37) = 0
    end select
       
    'Data Migration
    select case kicsystem(sysid,8)
      case "migration"
        PricingData(sysid,38) = 0
      case else
        PricingData(sysid,38) = 0
    end select
                 	
'expanding option variables 39-53 (8/13/2015 WC) -- begin	          
	 PricingData(sysid,39) = 0
         PricingData(sysid,40) = 0
	 PricingData(sysid,41) = 0
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
        'if (kicsystem(sysid,2) = "Furniture") then
        '    PricingData(sysid,30) = 4498  'includes $749 furniture now (3749+749)
        'else
        '  if (kicsystem(sysid,2) = "Tabletop3") then
        '    PricingData(sysid,30) = 3549    'Touch Only cost $200 less
        '  else
        '    PricingData(sysid,30) = 3749
        ' end if        
        'end if        
        PricingData(sysid,30) = 3749                          
      case "Bookeye4v3"
        PricingData(sysid,30) = 9999
      case "Bookeye4v2"        
        PricingData(sysid,30) = 12299
      case "Bookeye4v1"                
        PricingData(sysid,30) = 19508
      case "WT25"                
        PricingData(sysid,30) = 10000        
    end select    
    
    'FreeFlow PDF Module
    if (kicsystem(sysid,1) = "pdf") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,31) = 0
        case "Bookeye4v3"
          PricingData(sysid,31) = 0
        case "Bookeye4v2"
          PricingData(sysid,31) = 0          
        case "Bookeye4v1"
          PricingData(sysid,31) = 0                    
        case "WT25"
          PricingData(sysid,31) = 0          
      end select
    else
      PricingData(sysid,31) = 0
    end if        
                
    'FF Image Enh. Module (auto IT)
    if (kicsystem(sysid,2) = "imagetreat") then       
        PricingData(sysid,32) = 0   
    else
        PricingData(sysid,32) = 0  
    end if
    
    'FF OCR/Search PDF+Audio Mod.
    if (kicsystem(sysid,3) = "ocr") then       
        PricingData(sysid,33) = 0   
    else
        PricingData(sysid,33) = 0  
    end if
    
    'FF Batch Module (incl.Batch Imp.)
    select case kicsystem(sysid,4)
      case "batch"
        PricingData(sysid,34) = 0
      case else
        PricingData(sysid,34) = 0
    end select
    
    'Hierarchical Metadata
    select case kicsystem(sysid,5)
      case "metadata"
        PricingData(sysid,35) = 0
      case else
        PricingData(sysid,35) = 0
    end select   
    
    'Workflow
    select case kicsystem(sysid,6)
      case "workflow"
        PricingData(sysid,36) = 0
      case else
        PricingData(sysid,36) = 0
    end select

    'Automatic Archival
    select case kicsystem(sysid,7)
      case "archive"
        PricingData(sysid,37) = 0
      case else
        PricingData(sysid,37) = 0
    end select
       
    'Data Migration
    select case kicsystem(sysid,8)
      case "migration"
        PricingData(sysid,38) = 0
      case else
        PricingData(sysid,38) = 0
    end select
                 	
'expanding option variables 39-53 (8/13/2015 WC) -- begin	                  
	 PricingData(sysid,39) = 0
         PricingData(sysid,40) = 0
	 PricingData(sysid,41) = 0
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
        'if (kicsystem(sysid,2) = "Furniture") then
        '    PricingData(sysid,30) = 4498  'includes $749 furniture now (3749+749)
        'else
        '  if (kicsystem(sysid,2) = "Tabletop3") then
        '    PricingData(sysid,30) = 3549    'Touch Only cost $200 less
        '  else
        '    PricingData(sysid,30) = 3749
        ' end if        
        'end if        
        PricingData(sysid,30) = 3749                          
      case "Bookeye4v3"
        PricingData(sysid,30) = 9999
      case "Bookeye4v2"        
        PricingData(sysid,30) = 12299
      case "Bookeye4v1"                
        PricingData(sysid,30) = 19508
      case "WT25"                
        PricingData(sysid,30) = 10000        
    end select
    
    'FreeFlow PDF Module
    if (kicsystem(sysid,1) = "pdf") then
      select case kicsystem(sysid,0)
        case "BookEdge"
          PricingData(sysid,31) = 0
        case "Bookeye4v3"
          PricingData(sysid,31) = 0
        case "Bookeye4v2"
          PricingData(sysid,31) = 0          
        case "Bookeye4v1"
          PricingData(sysid,31) = 0                    
        case "WT25"
          PricingData(sysid,31) = 0          
      end select
    else
      PricingData(sysid,31) = 0
    end if        
                
    'FF Image Enh. Module (auto IT)
    if (kicsystem(sysid,2) = "imagetreat") then       
        PricingData(sysid,32) = 0   
    else
        PricingData(sysid,32) = 0  
    end if
    
    'FF OCR/Search PDF+Audio Mod.
    if (kicsystem(sysid,3) = "ocr") then       
        PricingData(sysid,33) = 0   
    else
        PricingData(sysid,33) = 0  
    end if
    
    'FF Batch Module (incl.Batch Imp.)
    select case kicsystem(sysid,4)
      case "batch"
        PricingData(sysid,34) = 0
      case else
        PricingData(sysid,34) = 0
    end select
    
    'Hierarchical Metadata
    select case kicsystem(sysid,5)
      case "metadata"
        PricingData(sysid,35) = 0
      case else
        PricingData(sysid,35) = 0
    end select   
    
    'Workflow
    select case kicsystem(sysid,6)
      case "workflow"
        PricingData(sysid,36) = 0
      case else
        PricingData(sysid,36) = 0
    end select

    'Automatic Archival
    select case kicsystem(sysid,7)
      case "archive"
        PricingData(sysid,37) = 0
      case else
        PricingData(sysid,37) = 0
    end select
       
    'Data Migration
    select case kicsystem(sysid,8)
      case "migration"
        PricingData(sysid,38) = 0
      case else
        PricingData(sysid,38) = 0
    end select
                 	
'expanding option variables 39-53 (8/13/2015 WC) -- begin	              
	 PricingData(sysid,39) = 0
         PricingData(sysid,40) = 0
	 PricingData(sysid,41) = 0
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
        SystemUnitService = .264 * PricingData(sysid,24)
      case "five"
        SystemUnitService = .429 * PricingData(sysid,24)
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
        SystemUnitServiceActive = .264 * PricingData(sysid,54)
      case "five"
        SystemUnitServiceActive = .429 * PricingData(sysid,54)
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
'1-pdf  FreeFlow PDF Module
'2-imagetreat FF Image Enh. Module (auto IT)
'3-ocr     FF OCR/Search PDF+Audio Mod.
'4-batch   FF Batch Module (incl.Batch Imp.)
'5-metadata   Hierarchical Metadata
'6-workflow    Workflow
'7-archive   Automatic Archival
'8-migration  Data Migration
'9-future option slot
'10-future option slot
'11-future option slot
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