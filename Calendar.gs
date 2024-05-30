/**
 * 替換事件顏色
 */
function changeColorForLastDayEvents() {

    var startDate = new Date("2024-05-01T00:00:00Z"); // 從 2024 年 5 月 1 日開始
    var endDate = new Date("2099-12-31T23:59:59Z"); // 到 2099 年 12 月 31 日結束
    var events = calendar.getEvents(startDate, endDate);

    events.forEach(function (event) {
        // 淡藍色 ("1")。淡綠色 ("2")。Mauve ("3")。淡紅色 ("4")。黃色 ("5")。橘色 ("6")。
        // 青色 ("7")。灰色 ("8")。藍色 ("9")。綠色 ("10")。紅色 ("11")。
        if (event.getTitle().indexOf("最後一天") !== -1) {
            event.setColor(8); //
        }
        if (event.getTitle().indexOf("商＊") !== -1) {
            event.setColor(5);
        }
        if (event.getTitle().indexOf("福＊") !== -1) {
            event.setColor(4);
        }
        if (event.getTitle().indexOf("創＊") !== -1) {
            event.setColor(6);
        }
        if (event.getTitle().indexOf("聯＊") !== -1) {
            event.setColor(3);
        }
        if (event.getTitle().indexOf("Ｐ種") !== -1) {
            event.setColor(2);
        }
        if (event.getTitle().indexOf("新種") !== -1) {
            event.setColor(7);
        }
    });
}

/**
 * 清空日曆所有事件
 * 如果是重複事件要先手動刪不然會跑到timeout
 */
function clearCalendar() {
    var events = calendar.getEvents(new Date("January 1, 1970"), new Date("December 31, 2100")); // 獲取所有事件，可根據需要修改日期範圍
    var deletedCount = 0;
    for (i = 0; i < events.length; i++) {
        var event = events[i];
        event.deleteEvent(); // 刪除事件
        deletedCount++;
        Logger.log("已刪除" + event.getTitle())
    }
    Logger.log("已刪除:" + deletedCount + "筆行程。")
}

/**
 * 清空含有特定文字的日程
 */
function clearCalendarByString() {
    var events = calendar.getEvents(new Date("January 1, 1970"), new Date("December 31, 2100")); // 獲取所有事件，可根據需要修改日期範圍
    var deletedCount = 0;
    for (var i = 0; i < events.length; i++) {
        if (events[i].getTitle().indexOf("登場") !== -1) { // 檢查標題是否含有 "123"
            events[i].deleteEvent(); // 刪除事件
            deletedCount++;
        }
    }
    Logger.log("已刪除:" + deletedCount + "筆行程。")
}

/**
 * 刪除某日的日程
 */
function deleteEventsForDate() {

    // 獲取要刪除日期的事件
    var eventsToDelete = calendar.getEventsForDay(2021 - 7 - 16);

    // 刪除事件
    for (var i = 0; i < eventsToDelete.length; i++) {
        var event = eventsToDelete[i];
        event.deleteEvent();
        Logger.log("已刪除事件: " + event.getTitle());
    }
}