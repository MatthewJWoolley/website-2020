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
        this.activities = [];
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

var workExperience = [];

var adobe = new Job("Adobe");
adobe.setDates("01/10/2018", "present");
adobe.setTitle("Technical Consultant");
adobe.setTitle("Shoreditch, London");
adobe.setActivities(
    "Design, implement, and maintain SaaS solutions for a variety of clients. Other Adobe Consulting clients include PlayStation and Ubisoft.",
    "Present to senior stakeholders, for example /'Deputy CIO/' of big 4 accountancy firm. Resulted in a change of strategy.",
    "Produce and maintain a wide variety of task lists, tickets, risk and time management tools depending on customer requirements - exposure to a wide variety of project management techniques.",
    "Collaborate with experts in different teams, roles, and geographies and enable colleagues based on their input."
)
workExperience.push(adobe)
