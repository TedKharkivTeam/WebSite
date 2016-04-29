<%@ LANGUAGE="VBScript" %>
<% 
  Function Rpad (MyValue, MyPadChar, MyPaddedLength)
    Rpad = MyValue & string(MyPaddedLength - Len(MyValue), MyPadChar)
  End Function
  
  iMode = 8
  set oFs = server.createobject("Scripting.FileSystemObject")
  if oFs.FileExists("C:\IIS-DataRoot\ImageAccess-20110107\DLSG\log\DiscountCodeLog.asp")=true then
    FileName = "C:\IIS-DataRoot\ImageAccess-20110107\DLSG\log\DiscountCodeLog.asp"
  else
    Filename = "E:\iis\dlsg\log\DiscountCodeLog.asp"
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
  DisCodeN=mid(DisCode,6,20)   'just grab up to 20 after 5 chars
  
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
  
  Response.Write(Discount) 
%> 