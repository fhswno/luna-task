# 📊 Data Visualisation Task (Luna Protocol)

This React app displays the JSON data in a table or in various charts.

This App was built using React.js (core), CSS (no framework), `rechart`, `lodash`, `moment`, `react-router-dom` and `react-table`.

## 🤔 What is does

You will see a homepage (at `/`) with links to the two main routes: one for the tables (`table`) and one for the charts (`chart`).

On the `/table` route, you will see a table displaying all values. The table supports sorting based on any field, pagination (with various page sizes), and search. It is important to note that the table is read-only.

On the `/chart` route, you will a chart displaying date of birth, annual income and years of experience. The user can select between the three properties, and choose to display them in a bar chart, line chart or pie chart. Null values are removed to keep the data readable and relevant). Salaries are displayed in ranges of 10k, dates of birth are grouped by year and years of experience are displayed in a ranges of 1 year.

## 🏃‍♂️ How to run it

Clone the repository, use the Terminal to `cd` into the project folder.

Make sure you have `node` and `npm` installed, and run `npm run start` to run the server.

The server should run on port 3000, but may run on another port if port 3000 is in use. Make sure to check where the server is running from the Terminal.

## 🛠️ How it was built

This App was built in exactly 3 hours using the technologies and dependencies mentioned in the Intro.

It has been built with simplicity and functionality in mind. My goal was to build as much features as I could, while making sure the final result is well-written, functional, stable and simple.

I used the ✨ classic ✨ `react-router-dom` to handle routing, `react-table` as it is a convenient, popular dependency to build tables, `rechart` for its simplicity and flexibility and `lodash` & `moment` to easily handle dates and data types. I could have considered `chart.js` to build the chart, but preferred to use `rechart` for its ease-of-setup and to make sure I can complete the task in less than three hours.

## ❌ Limitations

Decisions had to be made in order to ship the task on time.

I haven't been able to build sorting functionality manually due to limitations imposed by `react-table` - researching the issue started to take a while and I had to move on to the chart. If I had to do it again, I would have created a helper function to map through the result and filter them based on the data type (e.g. numeric operators if a Number, alphabetical sorting if a String, etc.).

I also haven't been able support autocomplete/autosuggest on the table or allow data filtering while in the charts - both due to time constraints. I prioritised getting core tasks done, such as supporting multiple visualisation options and supporting ranges in the charts.

## ✉️ Next Steps

If you have any questions about this repository or experience any issue trying to run it, feel free to reach out at [hi@davidohayon.uk](mailto:hi@davidohayon.uk).
