     $(document).ready(function() {
      // Display current day
      $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'));

      // Color code time blocks
      function updateHourBlocks() {
        var currentHour = dayjs().hour();
        $(".time-block").each(function() {
          var blockHour = parseInt($(this).find(".hour").text().trim().replace("AM", "").replace("PM", ""));
          if (blockHour < currentHour) {
            $(this).removeClass("present future").addClass("past");
          } else if (blockHour === currentHour) {
            $(this).removeClass("past future").addClass("present");
          } else {
            $(this).removeClass("past present").addClass("future");
          }
        });
      }

      updateHourBlocks();

      // Load events from local storage
      $(".time-block .description textarea").each(function() {
        var hour = $(this).closest(".time-block").find(".hour").text().trim();
        var savedEvent = localStorage.getItem(hour);
        if (savedEvent) {
          $(this).val(savedEvent);
        }
      });

      // Save event to local storage
      $(".time-block .saveBtn button").on("click", function() {
        var hour = $(this).closest(".time-block").find(".hour").text().trim();
        var eventText = $(this).closest(".time-block").find(".description textarea").val().trim();
        if (eventText !== "") {
          localStorage.setItem(hour, eventText);
        } else {
          localStorage.removeItem(hour);
        }
      });

       // Pre-populate text when preset button is clicked
       $(".presetBtn .preset").on("click", function() {
        var presetText = $(this).data("preset");
        $(this).closest(".time-block").find(".description textarea").val(presetText);
      });

      // Clear event from local storage
      $(".time-block .clearBtn button").on("click", function() {
        var hour = $(this).closest(".time-block").find(".hour").text().trim();
        localStorage.removeItem(hour);
        $(this).closest(".time-block").find(".description textarea").val("");
      });

      // Reset all events
      $(".reset-all-btn").on("click", function() {
        localStorage.clear();
        $(".time-block .description textarea").val("");
      });

      // Update time blocks every minute
      setInterval(updateHourBlocks, 60000);
    });
