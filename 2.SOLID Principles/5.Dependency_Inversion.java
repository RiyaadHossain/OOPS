/*
    Dependency Inversion Principle:
    High-level modules should not depend on low-level modules. Both should depend on abstractions.
    Abstractions should not depend on details. Details should depend on abstractions.

    The principle suggests that the high-level module should not depend on the low-level module, but both should depend on abstractions. This way, the high-level module is not affected by changes in the low-level module, and the low-level module can be easily replaced without affecting the high-level module.
*/


/* 
    Voilation of Dependency Inversion Principle:
    class WeatherTracker {
        private String currentConditions;
        private Emailer emailer;

        public WeatherTracker() {
            this.emailer = new Emailer(); // * Dependency on concrete class
        }

        public void setCurrentConditions(String weatherDescription) {
            this.currentConditions = weatherDescription;
            if (weatherDescription == "rainy") {
                emailer.sendEmail("It is rainy");
            }
        }
    }

    class Emailer {
        public void sendEmail(String message) {
            System.out.println("Email sent: " + message);
        }
    }
 
*/

interface Notifier {
    public void alertWeatherConditions(String weatherDescription);
}

class WeatherTracker {
    private String currentConditions;
    private Notifier notifier;

    public WeatherTracker(Notifier notifier) {
        this.notifier = notifier; // * Dependency on abstraction
    }

    public void setCurrentConditions(String weatherDescription) {
        this.currentConditions = weatherDescription;
        if (weatherDescription == "rainy") {
            notifier.alertWeatherConditions("It is rainy");
        }
    }
}

class Emailer implements Notifier {
    public void alertWeatherConditions(String weatherDescription) {
        System.out.println("Email sent: " + weatherDescription);
    }
}

class SMS implements Notifier {
    public void alertWeatherConditions(String weatherDescription) {
        System.out.println("SMS sent: " + weatherDescription);
    }
}
