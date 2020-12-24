var tables = document.getElementById("mainframe").contentWindow.document.getElementsByTagName("table")
maintable = tables[1]
tbd = maintable.childNodes[0]
mylocalform = tbd.getElementsByTagName("form")
mylocalform.frmCourse.id.value='469'; mylocalform.frmCourse.courseId.value='10020'; mylocalform.frmCourse.bl.value='0'; mylocalform.frmCourse.submit();
