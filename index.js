//adding country options
function c(country) {
  if (typeof country.title != "undefined") {
    var opt = document.createElement("option");
    opt.innerHTML = country.title;
    selct.appendChild(opt);
  }
}

const selct = document.querySelector("select");

//output
function show(val) {
  for (each in val.countryitems[0]) {
    const curr = val.countryitems[0][each];
    c(curr);
    selct.addEventListener("change", function (e) {
      if (e.target.value == curr.title) {
        //template output
        const output = `
     <div class="op c">Country : ${curr.title}</div>
     <div class="op tc">Total cases : ${curr.total_cases}</div>
     <div class="op tr">Total recovered : ${curr.total_recovered}</div>
     <div class="op td">Toatal deaths : ${curr.total_deaths}</div>
     <div class="op tact">Total active cases : ${curr.total_active_cases}</div>
     <div class="op tnew">New cases today : ${curr.total_new_cases_today}</div>
    <div class="op dt">deaths today : ${curr.total_new_deaths_today}</div>
    <div class="op sc">Serious cases : ${curr.total_serious_cases}</div>
        `;

        document.querySelector(".cont").innerHTML = output;
      }
    });
  }
}

//fetching api
const fdata = fetch(
  "https://api.thevirustracker.com/free-api?countryTotals=ALL"
)
  .then((res) => {
    return res.json();
  })
  .then((dat) => {
    show(dat);
  });
