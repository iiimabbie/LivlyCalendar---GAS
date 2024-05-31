/**
 * 一次trigger所有batch funtion
 * addNoticeEventsFromSheet() ← 這個不一樣，有變更再手動
 */
function triggerAddManuallyAll() {
    addLivlyEventsFromSheet();
    addPoolEventsFromSheet();
    addMouseEventsFromSheet();
}

/**
 * 批次處理LivlySheet的事件
 */
function addLivlyEventsFromSheet() {
    // 開始的行數為：3
    var startRow = 100 - 1; // index，第?行就是?-1
    var rows = livlySheet.getDataRange().getValues(); // 所有的列

    // 處理 startRow 行以後的
    for (var i = startRow; i < rows.length; i++) { // 每10筆更一次i的值，才不會跑太久
        var row = rows[i];
        // 處理左邊 "原種" 的事件
        handleSingleAllDayEvent(row[0], row[1], row[2]);
        // 處理右邊 "P種" 的事件
        handleSingleAllDayEvent(row[3], row[4], row[5]);
    }
}

/**
 * 批次處理PoolSheet的事件
 */
function addPoolEventsFromSheet() {
    // 開始的行數為：2
    var startRow = 200 - 1; // index，第?行就是?-1
    var rows = poolSheet.getDataRange().getValues(); // 所有的列

    // 處理 startRow 行以後的
    for (var i = startRow; i < rows.length; i++) { // 每10筆更一次i的值，才不會跑太久
        var row = rows[i];
        // 處理 "開始" 的事件
        handleSingleAllDayEvent(row[1], row[2], row[5]);
        // 處理 "結束" 的事件
        handleSingleAllDayEvent(row[3], row[4], row[5]);
    }
}

/**
 * 手動 - 批次處理NoticeSheet的事件
 */
function addNoticeEventsFromSheet() {
    // 開始的行數為：3
    var startRow = 11 - 1; // index，第?行就是?-1
    var rows = noticeSheet.getDataRange().getValues(); // 獲取所有列

    // 處理 startRow 行以後的每個行
    for (var i = startRow; i < rows.length; i++) {
        var rcurr = null;
        var row = rows[i];

        switch (row[4]) {
            case "yearly":
                rcurr = CalendarApp.newRecurrence().addYearlyRule();
                break;
            case "weekly":
            case "weeklyTime":
                rcurr = CalendarApp.newRecurrence().addWeeklyRule();
                break;
            default:
                break;
        }

        handleSingleAllDayEvent(row[0], row[1], row[3], row[2], rcurr);
    }
}

/**
 * 批次處理MouseSheet的事件
 */
function addMouseEventsFromSheet() {
    // 開始的行數為：3
    var startRow = 20 - 1; // index，第?行就是?-1
    var rows = mouseSheet.getDataRange().getValues(); // 獲取所有列

    // 處理 startRow 行以後的每個行
    for (var i = startRow; i < rows.length; i++) {
        var row = rows[i];

        // MouseStartEven
        handleSingleAllDayEvent(row[0], row[1], row[2]);
        // MouseEndEven
        handleSingleAllDayEvent(row[3], row[4], row[5]);
    }
}
