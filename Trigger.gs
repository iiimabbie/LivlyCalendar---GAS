// function onEdit(e) {
//     var sheetName = e.range.getSheet().getName(); // 獲取被編輯的表名
//     var editedRow = e.range.getRow(); // 獲取被編輯的行
//     Logger.log(sheetName,editedRow)
    

//     if (sheetName == "Pools") {
//         var rowData = poolSheet.getRange(editedRow, 1, 1, poolSheet.getLastColumn()).getValues()[0];
//         var [, pSSub, pSDate, , , pSDesc] = rowData; // 1/2/5 上新
//         var [, , , pESub, pEDate, pEDesc] = rowData; // 3/4/5 結束
//         handleSingleAllDayEvent(pSSub, pSDate, pSDesc);
//         handleSingleAllDayEvent(pESub, pEDate, pEDesc);

//     } else if (sheetName == "Livlys") {
//         var rowData = livlySheet.getRange(editedRow, 1, 1, livlySheet.getLastColumn()).getValues()[0];
//         var [lOSub, lODate, lODesc, ...lrest] = rowData; // 0/1/2 原種
//         var [lPSub, lPDate, lPDesc] = lrest; // 3/4/5 P種
//         handleSingleAllDayEvent(lOSub, lODate, lODesc);
//         handleSingleAllDayEvent(lPSub, lPDate, lPDesc);

//     } else if (sheetName == "Notice") {
//         var rowData = noticeSheet.getRange(editedRow, 1, 1, noticeSheet.getLastColumn()).getValues()[0];
//         var [nSub, nDate, nDesc, nRcurr, ...nrest] = rowData; // 0/1/2/3 Notice
//         var [nmsSub, nmsDate, nmsDesc, ...nmsrest] = nrest; // 4/5/6 MouseStart
//         var [nmeSub, nmeDate, nmeDesc] = nmsrest; // 7/8/9 MouseEnd

//         // 現行條件就三種，所以不特別寫util辨識重複條件，直接寫死
//         if (nRcurr === "addYearlyRule().addMonth(CalendarApp.Month.MAY).onDay(23)") {
//             nRcurr = CalendarApp.newRecurrence().addYearlyRule().addMonth(CalendarApp.Month.MAY).onDay(23);
//         }
//         if (nRcurr === "addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.MONDAY)") {
//             nRcurr = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.MONDAY);
//         }
//         if (nRcurr === "addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.TUESDAY).atHour(19)") {
//             nRcurr = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.TUESDAY).atHour(19);
//         }

//         handleSingleAllDayEvent(nSub, nDate, nDesc, nRcurr);
//         handleSingleAllDayEvent(nmsSub, nmsDate, nmsDesc);
//         handleSingleAllDayEvent(nmeSub, nmeDate, nmeDesc);

//     }
// }