calendarId = "a200972e55930fb88816a2a01900f3911b09e3cc8ef9454c59969187c3f5304f@group.calendar.google.com"; // 日程表的ID
calendarIdTest = "13d619b39890eb8eb421968ac2ccb522905ed88a75dba7dad622519e7add559c@group.calendar.google.com"; // 測試行事曆
calendar = CalendarApp.getCalendarById(calendarId);

poolSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pools"); // Pools工作表
livlySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Livlys"); // Livlys工作表
noticeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Notice"); // Notice工作表
mouseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Mouse"); // Mouse工作表
