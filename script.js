const floorSelect = document.getElementById("floorSelect");
const roomSelect = document.getElementById("roomSelect");
const showBtn = document.getElementById("showBtn");
const output = document.getElementById("output");

const groundRooms = {

    "H.M & F.M Lab": {
        direction: "from main gate -> move ahead -> take left -> reached",
        video: "hm_fmlab.mp4"
    },

    "NSS Cell": {
        direction: "from main gate -> move ahead -> take left -> Beside Lab -> reached"
    },

    "Board Room": {
        direction: "from main gate -> move ahead -> take left -> beside NSS Cell -> reached"
    },

    "Girls Waiting Hall": {
        direction: "from main gate -> move ahead -> take left -> near stairs -> reached"
    },

    "CDC": {
        direction: "from main gate -> move ahead -> take left -> take right -> reached"
    },

    "IQAC": {
        direction: "from main gate -> move ahead -> take left -> take right -> Beside CDC -> reached"
    },

    "Admissions Office": {
        direction: "from main gate -> move ahead -> take left -> more forward -> take right -> beside IQAC -> reached"
    },

    "Administrative Office": {
        direction: "from main gate -> move ahead -> take left -> move forward -> take right -> beside admission cell -> reached"
    },

    "Executive Office": {
        direction: "from main gate -> move ahead -> take left -> move forward -> take right -> beside administrative cell -> reached"
    },

    "Exam Branch": {
        direction: "from main gate -> move ahead -> take left -> move forward -> take right -> take right -> reached"
    },

    "UPS Room": {
        direction: "from main gate -> move ahead -> take left -> move forward -> take right -> beside stairs -> take right -> beside Exam Branch -> reached"
    },

    "Drinking Water": {
        direction: "from main gate -> move ahead -> take straight path -> move forward -> take left -> reached"
    },

    "Gents Washroom": {
        direction: "from main gate -> move ahead -> take straight path -> move forward -> take left -> reached"
    },

    "BEE Lab": {
        direction: "from main gate -> move ahead -> take straight path -> move forward -> reached",
        video: "bee_lab.mp4"
    },

    "Materials Science Lab": {
        direction: "from main gate -> move ahead -> take straight path -> move forward -> reached"
    },

    "Mechanical Department": {
        direction: "from main gate -> move ahead -> take straight path -> move forward -> reached"
    },

    "Civil Department": {
        direction: "from main gate -> move ahead -> take straight path -> move forward -> reached"
    },

    "Staff Room": {
        direction: "from main gate -> move ahead -> take straight path -> move forward -> reached"
    },

    "Auditorium": {
        direction: "main gate -> move ahead -> first right -> to the corner -> reached",
        video: "auditorium.mp4"
    },

    "Book Store": {
        direction: "main gate -> move ahead -> first right -> reached"
    },

    "Pharmacy Block": {
        direction: "main gate -> move forward till second right -> take right -> reached"
    }
};



// FLOOR CHANGE
floorSelect.addEventListener("change", () => {

    const floor = floorSelect.value;
    roomSelect.innerHTML = `<option value="">-- Select Room --</option>`;
    output.innerHTML = "";

    if (floor === "") {
        roomSelect.disabled = true;
        return;
    }

    if (floor !== "ground") {
        roomSelect.disabled = true;
        output.innerHTML = "<h3>Rooms not added for 1st, 2nd and 3rd floors</h3>";
        return;
    }

    roomSelect.disabled = false;

    for (let room in groundRooms) {
        let option = document.createElement("option");
        option.value = room;
        option.textContent = room;
        roomSelect.appendChild(option);
    }
});



// SHOW DIRECTION
showBtn.addEventListener("click", () => {

    const floor = floorSelect.value;
    const room = roomSelect.value;

    if (floor !== "ground" || room === "") {
        alert("Please select Ground Floor and Room");
        return;
    }

    const data = groundRooms[room];

    let videoHTML = "";

    if (data.video) {
        videoHTML = `
            <video controls muted autoplay id="roomVideo">
                <source src="${data.video}" type="video/mp4">
            </video>
        `;
    }

    output.innerHTML = `
        <h2>${room}</h2>
        <p>${data.direction}</p>
        ${videoHTML}
    `;

    const video = document.getElementById("roomVideo");
    if (video) {
        video.playbackRate = 2.0;
    }
});
