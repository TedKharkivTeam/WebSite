<%@ LANGUAGE="VBScript" %><% 
  BlockFile = Request.QueryString("Request")
  FullFile = server.mappath("/blocks/" & BlockFile)
  iMode = 1
  set oFs = server.createobject("Scripting.FileSystemObject")

  if oFs.FileExists(FullFile)=true then
    FileName = FullFile
  else
    FileName = server.mappath("/dlsg/blocks/" & BlockFile)
  end if

  set oTextFile = oFs.OpenTextFile(FileName, iMode)
  Response.Write(oTextFile.ReadAll)
  oTextFile.Close

  Set oTextFile=Nothing
  Set oFs=Nothing
%>