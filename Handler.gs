/**
 * 事件handler
 * @param subject 
 * @param date 
 * @param description 
 * @param recurrence 
 * @returns 
 */
function handleSingleAllDayEvent(subject, date, description, time, recurrence) {
    try {
        if (!subject || !date) { // 標題、日期，少一個就打回去
            return;
        }
        var date = new Date(date);
        var events = calendar.getEventsForDay(date);
        var existingEvent = events.find(function (e) {
            return e.getTitle() === subject;
        });

        if (existingEvent) {
            // 如果事件描述不一樣，更新事件描述
            if (existingEvent.getDescription() !== description) {
                existingEvent.setDescription(description);
                Logger.log("更新事件描述: " + existingEvent.getTitle());
            }
            Logger.log("已有相同事件&描述，未新建: " + existingEvent.getTitle());
        } else {
            // 建立新事件
            if (!recurrence) {// 沒有重複規則就建立單一事件
                if (time) { // 有時間就是小時事件
                    var hours = parseInt(time, 10);
                    date.setHours(hours);
                    var newEvent = calendar.createEvent(
                        subject,
                        date,
                        date,
                        { description: description }
                    )
                } else { // 沒有時間就是全日事件
                    var newEvent = calendar.createAllDayEvent(
                        subject,
                        date,
                        { description: description }
                    );
                }
            } else { // 有重複規則就是重複事件
                if (time) { // 有時間就是小時事件
                    var hours = parseInt(time, 10);
                    date.setHours(hours);
                    var newEvent = calendar.createEventSeries(
                        subject,
                        date,
                        date,
                        recurrence,
                        { description: description }
                    )
                } else { // 沒有時間就是全日事件
                    var newEvent = calendar.createAllDayEventSeries(
                        subject,
                        date,
                        recurrence,
                        { description: description }
                    );
                }
            }
            Logger.log("建立事件: " + newEvent.getTitle() + "，日期: " + Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy/MM/dd"));
        }
    } catch (e) {
        Logger.log("處理事件時發生錯誤: " + e.message);
    }
}