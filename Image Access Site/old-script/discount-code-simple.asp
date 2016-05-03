<%@ LANGUAGE="VBScript" %>
<% 
  DisCode = Request("DisCode")
  if DisCode = "123" then
    Response.Write("5")
  else
    Response.Write("0")  
  end if
%> 