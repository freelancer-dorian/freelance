// ==UserScript==
// @name     jxjy_lecture_dectect
// @version  0.1
// @grant    none
// ==/UserScript==

// implemented: phrase lecture table, get progress & btn, able to open a lecture.

var COURSE_TABLE_MIN_SIZE = 2
var LECTURE_TABLE_MIN_SIZE = 7
var COURSE_PROGRESS_OFFSET = 5
var LECTURE_PROGRESS_OFFSET = 2
var LECTURE_PROGRESS_SUB_OFFSET = 1
var LECTURE_TABLE_ITEM_COUNT_IN_ROW = 4

var click_evt = new MouseEvent("click"); 
var debugging = true


function get_course_progress(course_node) {
	if (course_node.length >= COURSE_PROGRESS_OFFSET + 1) {
		return course_node.childNodes[COURSE_PROGRESS_OFFSET].innerHTML
	} else {
		return ""
	}
}
function get_lecture_progress(lecture_node) {
	if (lecture_node.childNodes.length >= LECTURE_PROGRESS_OFFSET + 1) {
		return lecture_node.childNodes[LECTURE_PROGRESS_OFFSET].childNodes[LECTURE_PROGRESS_SUB_OFFSET].innerHTML
	} else {
		return ""
	}
}

function logging(log_content) {
	if (debugging) 
		console.log(log_content);
}

function get_childNode(any_node, idx) {
	if (any_node.childNodes.length >= idx) {
		return any_node.childNodes[idx]
	} else {
		return null
	}
}

function validate_lecture(lecture) {
	if (lecture.childNodes.length == LECTURE_TABLE_ITEM_COUNT_IN_ROW) 
		return true
	else
		return false
}




function checking() {
	logging("OK!")
	task = self.setInterval(main, 100)
  // ************************************** main sequence **********************************

  // 1. course list or lecture list
  function main() {
    logging("enter main")
    var mainframe = document.getElementById("mainframe")
    if(mainframe != undefined) {
      logging("mainfram found")
      var tables = document.getElementById("mainframe").contentWindow.document.getElementsByTagName("table")
      var table_count = tables.length
			logging("table count: "+table_count)
      // 1.1 course list
      if(table_count == 1){
        // 	a. find first un-complete course
        var course_list = get_childNode(tables[0], 0)
        if (course_list.length >= COURSE_TABLE_MIN_SIZE) {
          for (var i = 1; i < course_list.length; i++) {
            var progress = get_course_progress(course_list[0] ,course_list[i])
            if((progress != "") && (progress != "100%")) {
              // hit target, open the course and break
              // TBD
            }
          }
        }
        // 	b. else prmpt( other ways inform TBD) all courses are completed
      }
      // 1.2 check lecture list and play the un-completed list in the queue
      if(table_count >=2) {

        window.clearInterval(task)
        // 	get entire lecture list and check if any lecture uncomplete
        var lecture_table_outer = document.getElementById("mainframe").contentWindow.document.getElementsByTagName("table")[1]
        if (get_childNode(lecture_table_outer,0) != null) {
          var lecture_table = lecture_table_outer.childNodes[0]
          // header, control_element, lecture(start from index 7 - total more than 8)
          if (lecture_table.childNodes.length >= LECTURE_TABLE_MIN_SIZE + 1) {
            // loop lecture list, and check lecture progress
            for (var i = LECTURE_TABLE_MIN_SIZE; i < lecture_table.childNodes.length; i++) {
              var lecture = lecture_table.childNodes[i]
              if(validate_lecture(lecture)) {
                var lecture_progress = get_lecture_progress(lecture)
                logging(lecture.childNodes[1].innerHTML + " " + lecture_progress)
                if(lecture_progress != "1000%") { ////////////////////////////////////////////////////////// Manual updated progress
                  logging("hit lecture and play course")
									lecture.childNodes[3].childNodes[0].dispatchEvent(click_evt)
                  break
                }                
              }	
            }
          }
        }	
        // 	referh to get the latest progress
      }
    }
    else {
      logging("checking...")
    }
  }
}


logging("MONKEY is working V2!!!")
checking()
