<%@ LANGUAGE="VBScript" %><% 
  BlockFile = Request.QueryString("Request")
  
  FileName = server.mappath("../blocks/" & BlockFile)
  iMode = 1
  set oFs = server.createobject("Scripting.FileSystemObject")

  set oTextFile = oFs.OpenTextFile(FileName, iMode)
  Response.Write(oTextFile.ReadAll)
  oTextFile.Close

  Set oTextFile=Nothing
  Set oFs=Nothing
%>