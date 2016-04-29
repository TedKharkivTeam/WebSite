<%@ LANGUAGE="VBScript" %>
<% 
  iMode = 8
  set oFs = server.createobject("Scripting.FileSystemObject")
  if oFs.FileExists("C:\IIS-DataRoot\ImageAccess-20110107\DLSG\log\UserAgentData.asp")=true then
    FileName = "C:\IIS-DataRoot\ImageAccess-20110107\DLSG\log\UserAgentData.asp"
  else
    Filename = "E:\iis\dlsg\log\UserAgentData.asp"
  end if
  set oTextFile = oFs.OpenTextFile(FileName, iMode, True)
    
  VisitorIP = Request.ServerVariables("remote_addr")
  VisitorDNS = Request.ServerVariables("remote_host")
  VisitorBrowser = Request.ServerVariables("http_user_agent")
  winH = Request.QueryString("winH")
  winW = Request.QueryString("winW")
  docH = Request.QueryString("docH")
  docW = Request.QueryString("docW")
  
  LogString = chr(13) & "AccessDate:,""" & Now() & """"   
  LogString = LogString & ",RequestIP:,""" & VisitorIP & """"
  LogString = LogString & ",RequestDNS:,""" & VisitorDNS & """"
  LogString = LogString & ",VisitorAgent:,""" & VisitorBrowser & """"
  LogString = LogString & ",WindowHeight:,""" & winH & """"
  LogString = LogString & ",WindowWidth:,""" & winW & """"
  LogString = LogString & ",DocHeight:,""" & docH & """"
  LogString = LogString & ",DocWidth:,""" & docW & """"
  oTextFile.Write LogString
  oTextFile.Close
  set oTextFile = nothing
  set oFS = nothing  
  'Response.Write(Discount) 
%> 