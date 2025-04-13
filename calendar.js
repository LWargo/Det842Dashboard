document.addEventListener('DOMContentLoaded', () => {
    const calendarDays = document.getElementById('calendar-days');
    const monthYear = document.getElementById('month-year');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Sample events
    const events = [
        { date: '2025-05-02', title: 'Battle of the Flowers' },
        { date: '2025-05-03', title: 'Awards Banquet' },
        { date: '2025-05-19', title: 'Commissioning' },
        { date: '2025-05-01', title: 'Last PMT Day' },
        { date: '2025-04-24', title: 'Icarus' },
        { date: '2025-04-17', title: 'ORIs/FDEs' },
        { date: '2025-04-22', title: 'Spec War PT' },
        { date: '2025-04-24', title: 'Spec War PT' },

        // Add more events as needed
    ];

    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    function groupEventsByDate(events) {
        return events.reduce((acc, event) => {
            if (!acc[event.date]) {
                acc[event.date] = [];
            }
            acc[event.date].push(event);
            return acc;
        }, {});
    }

    // Group events into an object
    const eventsByDate = groupEventsByDate(events);

    function renderCalendar(month, year) {
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      calendarDays.innerHTML = "";
      monthYear.textContent = `${monthNames[month]} ${year}`;
  
      // Blank days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement("div");
        blank.classList.add("blank");
        calendarDays.appendChild(blank);
      }
  
      // Fill in the days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        const isToday =
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();
  
        if (isToday) {
          dayDiv.classList.add("today");
        }
  
        dayDiv.textContent = day;

        // Check if there's an event on this day
        const dayString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        // console.log("Checking date:", dayString);  // Check the generated date string
        const event = events.find(event => event.date === dayString);
       // console.log(events); // Log the events array to verify the date format

        console.log("Event on this day:", event);
        if (event) {
            const eventDot = document.createElement('span');
            eventDot.classList.add('event-dot');
            eventDot.title = event.title; // Show title on hover
          
            dayDiv.appendChild(eventDot); // Append the event dot inside the day div
            console.log("Appended event dot to dayDiv: ", dayDiv);
          }
          

        calendarDays.appendChild(dayDiv);
      }
    }

    // Navigation Buttons for Calendar
    prevBtn.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
    });
  
    nextBtn.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
    });
  
    // Initial calendar render
    renderCalendar(currentMonth, currentYear);
});
