class Job {
    constructor(company) { this.company = company; }

    setDates(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    setTitle(title) { this.title = title; }

    setLocation(location) { this.location = location; }

    setActivities() {
        var i;
        var j = arguments.length;
        for (i = 0; i < j; i++) {
            this.activities[i] = arguments[i];
        }
    }

    getJob() {
        var result = "";
        var i;
        var j = this.activities.length;

        result += this.startDate + " - " + this.endDate + "\n";       
        result += this.company + ", " + this.title + ", " + this.location + "\n";
        result += "\n"
        for (i = 0; i < j; i++) {
            result += " - " + this.activities[i] + "\n"
        }
        
        console.log(result);
    }
}