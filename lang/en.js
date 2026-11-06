/* Langue : en. Généré depuis lessons.en.json + interface. */
window.PACKS=window.PACKS||{};
PACKS["en"]={
"ui": {
"titles": [
"Choosing the architecture",
"Storing in the cloud",
"Getting the data in",
"The BigQuery warehouse",
"Cleaning with dbt",
"Putting it in a box",
"The autopilot",
"Infrastructure as code",
"Who pays for what",
"Who is allowed to see"
],
"brandSub": "The Data Engineering & Cloud course, explained again from zero",
"prog": "{n} / 10 lessons understood",
"sepL": "The 10 lessons",
"sepT": "Practice",
"home": "Home",
"map": "Course map",
"oral": "Oral practice",
"lex": "Glossary",
"track": "Exercises & project",
"goTo": "Go to",
"lang": "Language",
"heroEy": "Data Engineering & Cloud Infrastructure",
"heroT": "The course, finally<br>the right way round.",
"heroL": "Ten lessons explained again from zero, with everyday examples, the teacher's traps and quizzes to check it sticks.",
"first": "To get started",
"resume": "Pick up where you left off",
"allDone": "Everything understood",
"trainNow": "Time for oral practice",
"nDone": "{n} of 10 lessons understood",
"start": "Start",
"cont": "Continue",
"where": "Where to go",
"icMap": "Overview",
"dMap": "The whole pipeline in one picture. Read this first.",
"icOral": "Practice",
"dOral": "The teacher's questions, picked at random.",
"icLex": "Vocabulary",
"dLex": "Every English term, explained simply.",
"icTrack": "Organisation",
"dTrack": "Each lesson's TangoAI pages and your checkboxes.",
"ten": "The 10 lessons",
"beforeExam": "Before the exam",
"onTango": "On TangoAI",
"mockT": "Mock exam",
"mockD": "The real written format, once everything is ticked.",
"revT": "Course review",
"revD": "Lesson 11, which goes over the whole course.",
"defT": "Nailing the defence",
"defD": "10 minutes of pitch, 5 minutes of questions.",
"chipOk": "Understood",
"chipTodo": "To do",
"chipQuiz": "Quiz {g}/{t}",
"lessonN": "Lesson {n}",
"simple": "Super simple",
"why": "Why it exists",
"steps": "Step by step",
"ex": "Real example",
"words": "Words to know",
"trap": "The trap:",
"phraseNote": "the line to say in the oral",
"prof": "What the teacher will ask you",
"profHint": "Answer out loud BEFORE opening. That's what makes it stick.",
"quiz": "Quiz",
"yes": "Yes.",
"no": "No.",
"score": "{g} / {a} correct",
"perfect": " · perfect, you can tick the lesson",
"retry": " · reread the explanations, then reload the page to try again",
"doneBtn": "I understood this lesson",
"undoneBtn": "✓ Lesson understood (click to undo)",
"toOral": "Go to oral practice →",
"oralT": "Oral practice",
"oralL": "A random question from the teacher. Answer out loud: one sentence, a number if you have one, and what would change your mind. Then look at the answer.",
"show": "Show the answer",
"nextQ": "Next question",
"idk": "<b>If you don't know:</b> say so, then say what you do know. “I don't know, a teammate wrote that one. What I can tell you is why we needed it…” earns marks. A confident wrong answer doesn't.",
"lexT": "Glossary",
"lexL": "Every English word in the course, explained simply.",
"search": "Search a word",
"searchPh": "e.g. offset, grain, drift…",
"colWord": "Word",
"colPlain": "In plain words",
"colLesson": "Lesson",
"trNA": "This lesson isn't translated into English yet: the text below is in French.",
"mapEy": "Start here",
"mapT": "The whole course in one picture",
"mapL": "The course builds <mark>one single thing</mark>: a pipeline that takes the messy data of a fake online shop (Albert's Marketplace) and turns it into clean tables for analysts and a machine-learning team. Each lesson adds one piece. Click a piece to open it.",
"a1": "↓ data leaves the website",
"a2": "↓ dropped off as-is",
"a3": "↓ queried in SQL",
"a4": "↓ cleaned and tested",
"a5": "↓ read by analysts and ML",
"around": "Around the pipeline: make it run alone, anywhere, cheaply, safely",
"s1": "The plan",
"d1": "What to build, and why",
"s3": "The pipes",
"d3": "Batch, Kafka, CDC",
"d2": "The bucket: raw data, never touched",
"d4": "Fast, cheap, paid per read",
"dSv": "One single truth",
"dGd": "Ready for one question",
"d6": "Each program in a box",
"d7": "Run everything daily",
"d8": "Infrastructure written as code",
"d9": "Who pays for what",
"s10": "Governance",
"d10": "Who sees what",
"howT": "How to use this app",
"how": [
"<b>One lesson a day</b>, in order: each builds on the previous one. Lessons 1 and 5 are the foundations.",
"For each lesson: read “Super simple”, then the picture, then answer the teacher's questions <b>out loud</b> before opening the answer.",
"Take the quiz. Tick “understood” only if you got everything right.",
"Before the oral: oral practice gives you random questions, like the teacher."
],
"startL1": "Start lesson 1 →",
"trEy": "Tracking",
"trT": "Exercises and project",
"stL": "lessons understood",
"stQ": "perfect quizzes here",
"stE": "exercises and project steps ticked",
"byL": "Lesson by lesson",
"trHint": "Official links open TangoAI (sign in with your school account). Checkboxes are kept in your browser.",
"cL": "Lesson",
"cPrep": "Prepare",
"cClass": "In class",
"cHome": "At home",
"cProj": "Project",
"cQuiz": "Quiz",
"lSheet": "Simple sheet",
"lCourse": "Official course",
"lSetup": "Setup",
"lDemo": "Demo",
"lEx1": "Exercise 1",
"lEx2": "Exercise 2",
"lStep": "Project step",
"lQuiz": "Official quiz",
"done": "done",
"here": "here: {g}/{t}",
"endT": "End of the course",
"ckT": "Repo checklist",
"ckD": "40% of the project grade",
"prepT": "Preparing the defence",
"prepD": "Claiming ADRs, video, pitch"
},
"lessons": [
{
"id": "l1",
"t": "Choosing the architecture",
"en": "Architecture decision frame",
"one": "Before building, you decide <mark>where the data will live and in what shape</mark>. And you store everything on three floors: raw, cleaned, ready to serve.",
"img": {
"tag": "The picture: the shop's cash register",
"txt": "Imagine a shop where the same cash register is used to serve customers <b>and</b> to do the whole year's accounting. While the accountant scrolls through twelve months of receipts, the queue gets longer and longer. That is Albert's Marketplace's problem: a single PostgreSQL database runs the website AND the reports. Result: the site slows down, and every analyst finds a different revenue figure.<br><br>The fix: separate the <b>cash register</b> (record each sale, fast) from the <b>accountant's office</b> (analyse thousands of orders at once)."
},
"terms": [
[
"OLTP",
"The cash register. Records each event one by one, fast and without mistakes. E.g. the website's database."
],
[
"OLAP",
"The accountant's office. Reads millions of rows to answer a question. E.g. BigQuery."
],
[
"Normalisation",
"Storing each piece of information only once (the customer's email in one single table). Great for writing, slow for analysing."
],
[
"ACID",
"A transaction is all or nothing: cash is never taken out without the securities being credited."
],
[
"Data warehouse",
"A database built for analysis, with history. E.g. BigQuery."
],
[
"Data lake",
"A big bin where you throw every raw file, cheaply. Risk: it turns into a swamp."
],
[
"Lakehouse",
"A lake + a layer that adds a warehouse's guarantees (Delta, Iceberg)."
],
[
"ELT",
"Load the raw data first, clean it afterwards. What the course does."
],
[
"Bronze / Silver / Gold",
"Raw as it arrived / cleaned, one single truth / ready for one question."
],
[
"Grain",
"What ONE row of a table represents. “One row per product, per country, per day”."
],
[
"Star schema",
"A fact table (the numbers) in the middle, dimensions (product, date, country) around it."
],
[
"ADR",
"A dated note: what was decided, what was rejected, why, and what it costs."
]
],
"body": "<h2>The three floors (the heart of the WHOLE course)</h2>\n <div class=\"tscroll\"><table><tr><th>Floor</th><th>In a logistics warehouse</th><th>The promise</th></tr>\n <tr><td><b style=\"color:var(--bronze)\">Bronze</b></td><td>Boxes exactly as they come off the truck, even if two are identical</td><td>Nothing that arrived is ever lost</td></tr>\n <tr><td><b style=\"color:var(--silver)\">Silver</b></td><td>Parcels checked, labelled, duplicates set aside</td><td>One single truth, decided once</td></tr>\n <tr><td><b style=\"color:var(--gold)\">Gold</b></td><td>The order packed, ready to ship</td><td>Usable without cleaning anything</td></tr></table></div>\n <p><b>The example that justifies everything:</b> in the export, every order was loaded twice. 2025 revenue is €12.99M (raw), €11.73M (with <code>DISTINCT</code>, which looks clean but keeps 81% of the error), or €6.50M (the real rule). Silver is where you decide ONE rule and test it.</p>\n <h2>How you choose</h2>\n <p>Not “the most modern”. You look at six criteria: <b>workload</b> (reports? ML?), <b>data types</b>, <b>freshness</b>, <b>team & skills</b>, <b>cost</b>, <b>governance</b>. And you write it down in an ADR.</p>",
"trap": "“We chose a lakehouse because it is modern.” That is exactly the sentence the teacher gives as a <b>bad</b> ADR example. You need facts and criteria.",
"mine": "",
"phrase": "Pick the architecture from the workload; consumers never read bronze.",
"fr": "Choose based on the need; nobody reads the raw data.",
"qa": [
[
"Why don't analysts run their reports on the website's database?",
"Because it is an OLTP database: their big queries slow the site down, it only keeps the current state (no history), and it is split into many tables, so you need lots of joins."
],
[
"Why not clean bronze directly?",
"Because bronze is the proof of what arrived. If my cleaning rule is wrong, I have destroyed the only copy that let me start again."
],
[
"Why isn't DISTINCT enough for revenue?",
"DISTINCT removes identical duplicates. But most twin orders were placed on a different day, so they are not identical. You need a real business rule, in silver."
],
[
"What is the grain of the daily demand table?",
"One row per product, per country, per day. Facts: units and revenue. Dimensions: product, country, date."
]
],
"quiz": [
[
"The website's PostgreSQL database, which records each order, is…",
[
"An OLAP system",
"An OLTP system",
"A data lake"
],
1,
"It records events one by one: it is the “cash register”, so OLTP."
],
[
"Where should duplicate orders be fixed?",
[
"In bronze, so it is clean",
"In silver",
"In each analyst's dashboard"
],
1,
"Bronze stays raw (the proof). Silver is the single place where the rule is decided and tested."
],
[
"“One row per product, per country, per day” is…",
[
"The schema",
"The grain",
"A dimension"
],
1,
"The grain says what a row represents. It comes before everything else."
],
[
"The course does…",
[
"ETL: clean before loading",
"ELT: load the raw data, then clean",
"Neither"
],
1,
"ELT: the raw data stays in bronze, then dbt transforms it. Except passwords and cards, filtered out at extraction."
]
],
"eli5": {
"why": "A company has lots of data: orders, customers, products. It wants correct numbers to make decisions. The problem: this data is dirty, duplicated and badly organised.",
"steps": [
"The website records each sale in a database. That database is built to write fast, not to calculate over a whole year.",
"So the data is copied somewhere else, to a place built for calculating.",
"It is stored on 3 floors. <b>Bronze</b>: the raw copy. Nobody ever touches it, it is the proof.",
"<b>Silver</b>: the cleaned version. Duplicates are removed, and there is one single rule for everyone.",
"<b>Gold</b>: tables ready to read, for one precise question (for example: sales per product per day)."
],
"ex": "In the export, every order appears twice. Without cleaning, revenue is doubled: €13M instead of €6.5M."
}
},
{
"id": "l2",
"t": "Storing in the cloud",
"en": "Object storage foundations",
"one": "The raw data goes into a Google Cloud <mark>bucket</mark>, in <mark>Parquet</mark> format, sorted by date, kept for the right amount of time, and readable only by the right people.",
"img": {
"tag": "The picture: a warehouse full of labels",
"txt": "A bucket is a giant warehouse where each box carries a label with its full name, for example <code>bronze/orders/dt=2026-08-01/part-0.parquet</code>. <b>There are no shelves and no folders</b>: the slashes are part of the label. The console draws folders to look nice.<br><br>And you cannot open a box to add one item: you replace the whole box. That is why the way you split the data is a real decision."
},
"terms": [
[
"Bucket",
"The warehouse. In the exercise: data-engineering-i2-&lt;your-name&gt;."
],
[
"Object / key",
"A file / its full name, slashes included."
],
[
"Region",
"The physical building where the data sits: europe-west1 (Belgium). Choosing the region = choosing the law (GDPR)."
],
[
"Parquet",
"A format stored by columns, with stats (min/max). The engine reads only the useful columns and skips useless blocks."
],
[
"CSV",
"Comma-separated text. To read one column, you must read everything."
],
[
"Partitioning",
"Sorting by a filter column: dt=2026-08-01/. The engine only looks at the right shelves."
],
[
"Storage class",
"Standard (read often) → Nearline → Coldline → Archive (almost never read). Cheaper, but reading it back costs."
],
[
"Lifecycle policy",
"Automatic rule: after 30 days, move to something cheaper. For bronze: never delete."
],
[
"IAM",
"The badges: who (principal) has which right (role) on what (resource)."
],
[
"Least privilege",
"The smallest badge that is enough. Read-only on a single bucket, never “editor” everywhere."
],
[
"External table",
"A BigQuery table sitting on the bucket's files, without copying them."
]
],
"body": "<h2>The trap of small files</h2>\n <p>People think that the more you split, the faster it gets. Wrong. Measured on one month of orders:</p>\n <div class=\"tscroll\"><table><tr><th></th><th>Sorted by day</th><th>By day AND by product</th></tr>\n <tr><td>Files</td><td class=\"num\">31</td><td class=\"num\">8,649</td></tr>\n <tr><td>Size</td><td class=\"num\">280 KB</td><td class=\"num\">23.9 MB (×89)</td></tr>\n <tr><td>Time</td><td class=\"num\">224 ms</td><td class=\"num\">1,285 ms (×5.7)</td></tr></table></div>\n <p>Each Parquet file has a “header” (footer). On a one-row file, the header weighs more than the data. It is like packing each sweet in its own cardboard box.</p>\n <h2>What really costs money</h2>\n <ul class=\"clean\"><li><b>Storage</b>: almost free (less than one cent a month for the whole export).</li>\n <li><b>Operations</b>: billed per request, so per number of files. 100,000 small files = expensive.</li>\n <li><b>Egress</b>: data leaving the region. Moving out costs a fortune.</li></ul>",
"trap": "“Archive costs almost nothing, let's put everything in it.” Wrong: each class has a minimum duration. A file put in Archive and deleted a week later is billed for 365 days.",
"mine": "<b>In the exercise:</b> one bucket per person in europe-west1, with a <code>bronze/</code> prefix for Parquet files partitioned by <code>dt=</code>.",
"phrase": "Partition by how you filter, and keep files large.",
"fr": "Sort according to how queries filter, and keep files big.",
"qa": [
[
"Why is a bucket not a hard drive?",
"No folders (just names with slashes) and no editing: you can only replace a file entirely."
],
[
"Why Parquet rather than CSV?",
"Parquet is stored by columns with statistics: the engine reads only the requested columns and skips blocks outside the filter. It is also 2 to 5 times smaller."
],
[
"Why not sort by day AND by product?",
"It creates thousands of tiny files whose header weighs more than the data: ×89 in storage, ×5.7 in time in the course's test."
],
[
"How do you give the ML team access?",
"Read-only (objectViewer), on the only useful resource, with a dedicated service account, without a key file. Never editor on the whole project."
]
],
"quiz": [
[
"In a bucket, bronze/orders/ is…",
[
"A real folder",
"The start of a name shared by several files (prefix)",
"Another bucket"
],
1,
"There are no folders: a “folder” is only a shared prefix."
],
[
"What makes a bucket's bill explode?",
[
"The number of GB stored",
"The number of files (operations) and the data leaving the region",
"The colour of the labels"
],
1,
"Storage is almost free; operations are billed per request, egress per GB leaving."
],
[
"Why does bronze's lifecycle delete nothing?",
[
"Because someone forgot",
"Because bronze promises nothing is lost",
"Because Google forbids it"
],
1,
"It cools the data down to lower the cost, without breaking bronze's promise."
]
],
"eli5": {
"why": "You need a place to put the raw data (bronze): cheap, safe, and readable by the whole team.",
"steps": [
"Google Cloud rents out <b>buckets</b>: big online storage spaces.",
"You put files in them. Each file has a full name, for example <code>bronze/orders/dt=2026-08-01/file.parquet</code>.",
"You use the <b>Parquet</b> format rather than CSV: it is smaller, and you can read a single column without reading the whole file.",
"Files are sorted by date (<code>dt=…</code>): when you look for August, you only open August's files.",
"You decide who is allowed to read (<b>IAM</b>) and how long files are kept (<b>lifecycle</b>)."
],
"ex": "Sorting by day: 31 files, fast. Sorting by day AND by product: 8,649 tiny files, 5.7 times slower."
}
},
{
"id": "l3",
"t": "Getting the data in",
"en": "Batch, streaming, CDC",
"one": "Three pipes fill bronze on their own. Each one <mark>sees</mark> some things, <mark>misses</mark> others, and can <mark>lose</mark> or <mark>duplicate</mark> rows.",
"img": {
"tag": "The picture: three ways to supply a shop",
"txt": "<b>Batch</b> = the truck that comes every night with a pile of boxes. Simple, cheap.<br><b>Streaming</b> = a conveyor belt that never stops: parcels arrive one by one (the website's clicks, through Kafka).<br><b>CDC</b> = instead of looking at the shop, you read the <b>manager's notebook</b>, where every arrival, every price change and every removed product is written down."
},
"terms": [
[
"Cursor",
"A bookmark: “I have read everything up to 17 September”. Next time, you only read what comes after."
],
[
"Incremental / Full refresh",
"Read only what's new / reread everything."
],
[
"Kafka topic",
"The named conveyor belt, here clickstream."
],
[
"Offset",
"The number of the last parcel processed on the belt."
],
[
"Commit",
"Writing down “I have processed up to parcel no. X”."
],
[
"WAL",
"The manager's notebook: the log where the database writes every change."
],
[
"Replication slot",
"Your bookmark in that notebook. Danger: if forgotten, the database keeps the whole notebook and its disk fills up."
],
[
"At least once",
"Never lost, but sometimes duplicated."
],
[
"At most once",
"Never duplicated, but sometimes lost."
],
[
"DLQ (dead letter queue)",
"The bin for damaged parcels: the broken row is set aside, with the reason, and the flow continues."
],
[
"Schema drift",
"The source changes shape without warning."
]
],
"body": "<h2>What the bookmark doesn't see</h2>\n <p>The cursor looks at the order date. So:</p>\n <ul class=\"clean\"><li>A <b>cancelled</b> (deleted) order: there's no row left to read, the warehouse still counts it.</li>\n <li>A <b>corrected price</b>: the date doesn't move, the correction is invisible.</li></ul>\n <p>No error is shown. That is why CDC exists: the manager's notebook necessarily contains the changes and deletions.</p>\n <h2>Duplicate or loss: it all comes down to two lines of code</h2>\n <div class=\"tscroll\"><table><tr><th>Order</th><th>If it crashes in between</th><th>Guarantee</th></tr>\n <tr><td>Write the file, <b>then</b> record the offset</td><td>It rereads and rewrites: duplicate</td><td>At least once</td></tr>\n <tr><td>Record the offset, <b>then</b> write</td><td>The event is skipped: loss</td><td>At most once</td></tr></table></div>\n <p>For money (orders, payments), a duplicate you remove later is better than a lost order. So <b>at least once</b>, and duplicates are removed in silver thanks to <code>event_id</code>.</p>",
"trap": "Filtering passwords (<code>pwd</code>) and cards (<code>card_no</code>, <code>cvv</code>) later in dbt. Too late: they are already written in bronze and in the backups. You remove them <b>at the source</b>, in the connector.",
"mine": "<b>Measured in the exercise:</b> the Kafka consumer was killed during the “written but not yet recorded” window. After restart: <b>482 rows for 282 events, so 200 duplicates</b>, exactly one batch. CDC saw the INSERT, the UPDATE (21.98 → 24.50) and the DELETE; the cursor only saw the INSERT.",
"phrase": "The delivery guarantee is where you commit the offset.",
"fr": "Loss or duplicate: it all depends on when you write down “done”.",
"qa": [
[
"What does a cursor-based sync miss?",
"Changes that don't move the cursor column, and every deletion. Example: a cancelled order stays in the revenue."
],
[
"What guarantee does your Kafka consumer give?",
"At least once: I write the file, then I record the offset. I measured 200 duplicates after a crash. I remove them in silver with event_id."
],
[
"What is the danger of CDC?",
"The replication slot: if nobody reads it, the database keeps its whole log and its disk fills up, production goes down. You monitor it and delete useless slots."
],
[
"What do you do with a malformed event?",
"I don't crash and I don't throw it away: I send it to the dead letter queue with the row, the reason and the time, and the flow continues."
]
],
"quiz": [
[
"Your consumer writes the file and then commits the offset. It crashes in between. Result?",
[
"Lost rows",
"Duplicates",
"Nothing at all"
],
1,
"On restart, it rereads from the last recorded offset: it rewrites what it had already written. That's at least once."
],
[
"Which mode sees deletions?",
[
"Incremental batch with a cursor",
"CDC",
"None"
],
1,
"CDC reads the database's log, which necessarily contains the DELETEs."
],
[
"Where do you remove the cvv column?",
[
"In dbt, in silver",
"In the connector, before bronze",
"In the dashboard"
],
1,
"The ingestion boundary is the last place where you can refuse entry."
],
[
"A Kafka row is broken. What do you do?",
[
"Stop the whole pipeline",
"Silently throw it away",
"Put it in the DLQ with the reason"
],
2,
"The DLQ keeps the proof and lets the flow continue."
]
],
"eli5": {
"why": "At first, the data was copied by hand. It needs to arrive on its own, all the time.",
"steps": [
"Way 1, <b>batch</b>: once a day, a program copies what is new.",
"To know what is new, it remembers the last date it read (the <b>cursor</b>). Problem: it sees neither changed rows nor deleted rows.",
"Way 2, <b>streaming</b> (with Kafka): each click on the website arrives live, one by one.",
"Way 3, <b>CDC</b>: you read the database's internal log, which records everything, including changes and deletions.",
"If a program crashes at the wrong moment, it can copy a row twice (duplicate) or skip one (loss). We prefer the duplicate, which we clean up afterwards."
],
"ex": "The Kafka program was stopped in the middle of its work. After restart: 200 duplicated rows."
}
},
{
"id": "l4",
"t": "The BigQuery warehouse",
"en": "SQL warehouses",
"one": "BigQuery answers questions in SQL. The key fact: <mark>you pay per byte read</mark>. The shape of your tables becomes the shape of your bill.",
"img": {
"tag": "The picture: a taxi paid by the kilometre",
"txt": "Each query is a taxi ride: you pay for the distance (the bytes read), not for the size of the city. <code>SELECT *</code> is driving all the way round Paris to get to the corner of the street.<br><br><b>Partitioning</b> is knowing which district to go to. <b>Clustering</b> is knowing which street in the district. The <b>dry run</b> is the quote before you get in. And <code>maximum_bytes_billed</code> is a cap on your card: above it, the taxi refuses to start."
},
"terms": [
[
"Column-oriented",
"The warehouse reads only the requested columns."
],
[
"On demand / Capacity",
"Pay per byte (irregular workload) / rent computing power at a fixed price (steady workload)."
],
[
"Partitioning",
"Splitting the table by a date. The filter must compare the column with a constant."
],
[
"Clustering",
"Sorting rows inside each partition (up to 4 columns) to skip blocks."
],
[
"Dry run",
"The quote: how much the query would read, without running it."
],
[
"maximum_bytes_billed",
"A cap: the query is refused before it costs anything."
],
[
"Materialised view",
"A stored result that updates itself."
],
[
"Collapse ratio",
"Table rows / number of groups. Close to 1 = the view saves nothing."
],
[
"Skew",
"One key much heavier than the others: one worker works, the others wait."
],
[
"Cache",
"A repeated query costs 0 bytes. Turn it off to measure."
]
],
"body": "<h2>The teacher's three traps</h2>\n <ul class=\"clean\"><li><code>SELECT * ... LIMIT 10</code> is <b>not cheaper</b>: LIMIT reduces the rows shown, not the bytes read. $26.10 with or without LIMIT in the course's example.</li>\n <li>A filter that breaks pruning (dates coming from a subquery) costs <b>more than no filter at all</b>.</li>\n <li>“It got slower” often comes from the cache: the old “2 seconds” had read 0 bytes.</li></ul>\n <h2>Bronze stays in the bucket</h2>\n <p>Bronze is an archive, rarely read: it is read through an external table. Silver and gold, read all the time, are loaded into real BigQuery tables.</p>",
"trap": "The warehouse computes the right revenue and the wrong one just as fast. Partitioning and clustering answer “how much and how fast?”, never “is it true?”. That is silver's job (lesson 5).",
"mine": "<b>Measured in the exercise:</b> partition by month → Q2 reads <b>11 times less</b>. Clustering by product → <b>no gain</b> for Q2 (it doesn't look for one specific product) but <b>21 times less</b> to look up a rare product. Cap at 1 MB → “Query exceeded limit for bytes billed”, cost $0. And the rule “one order per buyer per day” gives €11.8M instead of €6.5M: it keeps 81% of the error.",
"phrase": "Never SELECT *; filter on the partition column.",
"fr": "Choose your columns, always filter on the partition.",
"qa": [
[
"Why isn't bronze loaded into BigQuery?",
"It is an archive written once and rarely read. Loading it means paying the warehouse price for nothing and having two copies of the truth."
],
[
"Difference between partitioning and clustering?",
"Partitioning splits by date and decides which pieces to open. Clustering sorts inside each piece and decides which part to read. I measure with a dry run."
],
[
"Do you need a materialised view for daily demand?",
"It depends on the collapse ratio. Per product and per day, 408,560 rows for 356,981 groups: 1.14, almost nothing to gain."
],
[
"A query goes from 2 s to 2 min. What do you check?",
"First whether the old time came from the cache. Then the bytes read (did the partition filter disappear?), then the Execution details: the longest stage, and the slowest worker compared with the average (skew)."
]
],
"quiz": [
[
"SELECT * FROM table LIMIT 10 costs…",
[
"Almost nothing thanks to LIMIT",
"As much as without LIMIT",
"Nothing at all"
],
1,
"LIMIT reduces the rows returned, not the bytes read."
],
[
"Clustering by product doesn't help a query that ranks ALL products. Why?",
[
"Clustering is broken",
"It doesn't filter on any specific product, so no block can be skipped",
"You need 4 columns"
],
1,
"Clustering skips blocks that don't contain the value you look for. With no value to look for, nothing to skip."
],
[
"A query exceeds maximum_bytes_billed. It costs…",
[
"The amount of the cap",
"$0, it is refused before running",
"Double"
],
1,
"It fails before execution, without billing."
],
[
"Collapse ratio of 1.14: the materialised view…",
[
"Saves a huge amount",
"Saves almost nothing in bytes",
"Is compulsory"
],
1,
"The stored result is almost the size of the original table."
]
],
"eli5": {
"why": "The data is in the bucket. To ask questions (“how much did we sell in August?”), you need a tool that calculates fast: BigQuery.",
"steps": [
"BigQuery understands the <b>SQL</b> language: you write the question, it gives you the answer.",
"You pay according to the amount of data read, not the time spent.",
"So you only read the useful columns: never <code>SELECT *</code>.",
"You split the table by month (<b>partition</b>): a question about August only reads August.",
"You set a cap (<code>maximum_bytes_billed</code>): a query that is too expensive is refused before it costs anything."
],
"ex": "Splitting the table by month divided by 11 the amount of data read for a question about one quarter."
}
},
{
"id": "l5",
"t": "Cleaning with dbt",
"en": "dbt & medallion",
"one": "dbt turns bronze into silver then gold with SQL queries, and <mark>tests</mark> that shout the day a table stops telling the truth. <b>It is the most important lesson.</b>",
"img": {
"tag": "The picture: the join that multiplies",
"txt": "Marketing asks: “how many units did we sell of products rated above 4?”. We stick the order lines to the reviews. A product with 8 reviews sees <b>each of its sales counted 8 times</b>.<br><br>Result: <b>20,323,852 units</b> instead of 1,175,110, i.e. 17 times too many, and more than the company has ever sold. The SQL is valid, no error. Only a test on the grain catches it."
},
"terms": [
[
"Model",
"A SELECT file that dbt turns into a table or a view."
],
[
"ref()",
"Points to another model. dbt works out the order by itself."
],
[
"source()",
"Points to a raw table (bronze)."
],
[
"staging/",
"One model per source, no joins: rename, type, clean."
],
[
"intermediate/",
"The joins and the business logic."
],
[
"marts/",
"The final tables: fct_ (facts) and dim_ (dimensions)."
],
[
"Test",
"A query that must return zero rows. Otherwise: FAIL and the list of culprits."
],
[
"unique_combination_of_columns",
"The grain test: no (order_id, p_id) combination appears twice."
],
[
"Fan-out",
"A join that multiplies rows."
],
[
"Freshness",
"The maximum accepted delay for a source."
],
[
"dbt build",
"Builds AND tests each model in order, and skips everything after a failure."
],
[
"Lineage",
"The graph of who depends on whom. Used to know what breaks if a source changes."
]
],
"body": "<h2>Two joins that double, two remedies</h2>\n <div class=\"tscroll\"><table><tr><th></th><th>Orders → addresses</th><th>Sales → reviews</th></tr>\n <tr><td>Multiplication</td><td class=\"num\">×2</td><td class=\"num\">×17</td></tr>\n <tr><td>Does a rule pick ONE row?</td><td>Yes: the default address</td><td>No: a product really has several reviews</td></tr>\n <tr><td>Remedy</td><td><b>Filter</b> (<code>is_default = 1</code>)</td><td><b>Aggregate first</b> (one row per product)</td></tr></table></div>\n <h2>Alarm or lock?</h2>\n <p><code>dbt run</code> then <code>dbt test</code>: the bad data is already in the tables when the test rings. It is an <b>alarm</b>.<br><code>dbt build</code>: the test runs right after the model, and everything that follows is skipped. The bad data never arrives. It is a <b>lock</b>.</p>\n <h2>Not null ≠ not empty</h2>\n <p>The review text is declared NOT NULL. Yet 14 are empty and 110 contain just a space. Hence <code>NULLIF(TRIM(r_desc), '')</code> in staging.</p>",
"trap": "When a uniqueness test fails, the temptation is to delete the test. The teacher says it: <b>it is the worst thing to do</b>. You fix the join, not the test.",
"mine": "<b>Measured in the exercise:</b> the join to reviews inflated the table to 8.9 million rows and the test said <b>FAIL 315450</b>. dbt build skipped <code>fct_daily_demand</code> and its 3 tests: the ML team never saw the wrong number. Fixed by aggregating reviews per product: PASS=12.",
"phrase": "Declare the grain, and test it at every layer boundary.",
"fr": "Say what a row is, and test it on every floor.",
"qa": [
[
"How do you know your fact table doesn't count twice?",
"Its grain is written in the description, and a unique_combination_of_columns test covers exactly those columns. If a join multiplies, the test fails and dbt build blocks what follows."
],
[
"Why no joins in staging?",
"Staging = one source, one model, so a defect is fixed in a single place. Joins are business choices: they go in intermediate."
],
[
"Why staging as views and marts as tables?",
"Views are always fresh and store nothing; marts are read by dashboards, so they are tables to be fast. Price: marts are only as fresh as the last run. If minute-fresh data were needed, I would switch to incremental."
],
[
"All tests pass. Is the data good?",
"Not necessarily: a clean table that is three weeks old passes every test. Hence freshness."
]
],
"quiz": [
[
"Sales → reviews multiplies rows ×17. The remedy?",
[
"Filter on the first review",
"Aggregate reviews per product before joining",
"Delete the test"
],
1,
"No rule designates “the” review of a product, so you aggregate to one row per product."
],
[
"dbt build, compared with dbt run then dbt test…",
[
"Is the same",
"Stops data that fails a test from reaching the following tables",
"Is just faster"
],
1,
"It tests each model right after building it and skips what follows on failure."
],
[
"A dbt test “passes” when the query returns…",
[
"One row",
"Zero rows",
"All rows"
],
1,
"A test lists the rows that should not exist."
],
[
"Where does a join between orders and order_items go?",
[
"staging",
"intermediate",
"sources.yml"
],
1,
"As soon as you combine two sources, it is no longer staging."
]
],
"eli5": {
"why": "BigQuery calculates fast, but it calculates a wrong number just as fast. You need to build silver and gold properly, and automatically check that they are right.",
"steps": [
"<b>dbt</b> is a tool where each file is an SQL query that builds a table.",
"<b>staging</b>: one cleaned table per source (useless columns removed, empty texts turned into real empties…).",
"<b>intermediate</b>: the tables are put together.",
"<b>marts</b>: the final tables, in other words gold.",
"<b>Tests</b> check on their own: “no duplicate”, “never empty”… If a test fails, <code>dbt build</code> stops everything that comes after."
],
"ex": "Sticking sales to customer reviews multiplied sales by 17. The “no duplicate” test saw it and blocked what followed."
}
},
{
"id": "l6",
"t": "Putting it in a box",
"en": "Packaging data jobs (Docker)",
"one": "Each program is packed in a <mark>Docker image</mark> so that it runs exactly the same on any machine. That is the condition for scheduling it in lesson 7.",
"img": {
"tag": "The picture: the shipping container",
"txt": "Your code works “on your machine” because your machine has the right tools (your Python version, your system libraries). On another machine, one is missing and everything crashes.<br><br>Docker reuses the idea of the cargo container: you put the goods <b>and everything they need</b> in a standard box that loads onto any ship. The <b>image</b> is the sealed box with its loading slip. The <b>container</b> is that box opened and used on a dock. You can open a hundred copies from the same image. And each box carries a dated batch number: you never call it “the latest” (<code>latest</code>)."
},
"terms": [
[
"Image",
"The frozen template, built once."
],
[
"Container",
"A running copy. What it writes disappears with it, except through a volume."
],
[
"Dockerfile",
"The recipe: FROM, COPY, RUN, USER, CMD."
],
[
"Layer",
"Each line of the recipe creates a layer. Docker reuses layers that haven't changed (cache)."
],
[
"RUN / CMD",
"RUN runs at build time, CMD at launch."
],
[
".dockerignore",
"The list of what must never go into the image (.env, .venv)."
],
[
"Registry",
"The shared shelf: Docker Hub or Artifact Registry."
],
[
"Tag",
"The version name: 2026-10-27, never latest."
],
[
"Digest",
"The unique sha256 fingerprint of an image. Same digest = exactly the same image."
],
[
"Pinning",
"Exact versions at both ends: python:3.12.12-slim-bookworm AND pandas==3.0.5."
],
[
"docker compose",
"A file describing several containers that go together."
]
],
"body": "<h2>The four reflexes</h2>\n <ul class=\"clean\"><li><b>Layer order</b>: copy requirements.txt first, install, then copy the code. Changing one line of code no longer reinstalls everything.</li>\n <li><b>Small image</b>: pinned slim base, pip without cache.</li>\n <li><b>Never a secret in the image</b>: a .dockerignore that excludes .env. Deleting the file in a later layer is useless, the old layer keeps it.</li>\n <li><b>Not as root</b>: create a user, then USER.</li></ul>\n <h2>Why latest is forbidden</h2>\n <p>On Monday, latest = version 1.12. On Wednesday, someone pushes 1.13. On Thursday, you re-run Monday: you processed Monday's data with Wednesday's tool, and nothing says so.</p>",
"trap": "“A container is a small virtual machine.” No: it is a program sharing your machine's kernel, with its own view of the files. Hence the instant start.",
"mine": "<b>Measured in the exercise:</b> 2.21 GB → 615 MB; rebuild after a code change 73 s → 3 s; user root → extractor. The fake secret could be read with <code>cat /app/.env</code>, then no longer after the .dockerignore. Identical digest on push and pull: <code>sha256:994a20b9…</code>.",
"phrase": "Pin every version; tag images immutably.",
"fr": "Exact versions everywhere, never latest.",
"qa": [
[
"Image or container?",
"The image is the frozen template; the container is a running copy. A hundred containers from one image, none of them can change it."
],
[
"Why isn't a virtualenv enough?",
"It isolates Python packages, not the system: Python version, libraries like libpq, locale. The container carries all of that."
],
[
"I deleted the .env in a later layer, is that OK?",
"No. The old layer still contains the file. You must never copy it (.dockerignore) and pass secrets at launch. And if the image was pushed: change the secret."
],
[
"How do you prove an image is reproducible?",
"Run it, delete the image, pull it back by its tag, run again, same result, and show that both digests are identical."
]
],
"quiz": [
[
"Why copy requirements.txt before the code?",
[
"It looks nicer",
"So the cache keeps the installation when only the code changes",
"Docker requires it"
],
1,
"Only the last layer (the code) is rebuilt: 73 s → 3 s in the exercise."
],
[
"The proof that the pulled image is exactly the one built?",
[
"The same tag",
"The same sha256 digest",
"The same size"
],
1,
"A tag can be moved; the digest is the fingerprint of the content."
],
[
"The latest tag means…",
[
"The latest stable version",
"Wherever someone pushed last, which can change",
"A tested version"
],
1,
"It is a moving label, not a version."
]
],
"eli5": {
"why": "The program works on your computer. On another computer, or on a server, things are missing and it crashes.",
"steps": [
"Docker puts the program AND everything it needs in a box: an <b>image</b>.",
"The <b>Dockerfile</b> is the box's recipe.",
"You can launch the box on any computer: the running box is called a <b>container</b>.",
"Each box gets a fixed version number (a date), never <code>latest</code>.",
"You never put a password in the box: anyone could read it."
],
"ex": "Done well, the box goes from 2.2 GB to 615 MB, and rebuilds in 3 seconds instead of 73."
}
},
{
"id": "l7",
"t": "The autopilot",
"en": "Orchestration (Airflow)",
"one": "Airflow runs the pipeline on its own every day. The surprise: it also <mark>re-runs</mark> tasks that fail. Re-running must break nothing: that is <mark>idempotency</mark>.",
"img": {
"tag": "The picture: the lift and the basket",
"txt": "Pressing the lift's call button twice is the same as pressing it once: it is <b>idempotent</b>.<br>Clicking “Order” twice on a website makes two orders: it is <b>not</b> idempotent.<br><br>An <code>INSERT</code> is the double click on “Order”: each re-run adds everything twice. A <code>MERGE</code> on a key is the lift button: “if this product exists, I update it, otherwise I add it”. Re-run a hundred times, same result."
},
"terms": [
[
"DAG",
"The work plan: tasks and their order, with no loop."
],
[
"Task / Operator",
"A step / its type (run a Docker container…)."
],
[
"Schedule",
"The frequency: @daily."
],
[
"data_interval_start/end",
"The period a run covers. Use it instead of date.today()."
],
[
"Retry",
"Re-running a task that failed."
],
[
"Idempotent",
"Doing it twice = doing it once."
],
[
"MERGE",
"Update if the key exists, insert otherwise."
],
[
"Backfill",
"Re-running the DAG over past days."
],
[
"catchup=False",
"Doesn't create all past runs at once. It is NOT a protection."
],
[
"on_failure_callback",
"The alert that fires when the task has failed for good."
],
[
"Trigger rule",
"When a task starts. all_done = even if upstream failed."
],
[
"Poison row",
"A fake row inserted on purpose to check that a test catches it."
]
],
"body": "<h2>The retry that tripled revenue</h2>\n <p>A day with 174 orders, loaded with INSERT. The network hiccups, Airflow re-runs: 348 rows. Again: 522. Revenue is 3 times too high and <b>everything is green</b>. With MERGE: 174, 174, 174.</p>\n <h2>The traps of green</h2>\n <ul class=\"clean\"><li>A task that calls <code>date.today()</code> cannot be backfilled: re-running March gives 31 times today's answer.</li>\n <li>The final clean-up in <code>all_done</code> succeeds even if a task in the middle failed: the whole run looks green. Alert on tasks, not on the run.</li>\n <li>An alert on <code>on_retry_callback</code> rings at every small hiccup: the team stops reading the channel.</li>\n <li>BigQuery doesn't enforce uniqueness: a primary key prevents no duplicate.</li></ul>",
"trap": "“My task is idempotent.” The teacher wants the <b>mechanism</b>: “MERGE on order_id”, “I replace the day's partition”. Without a named mechanism, your task simply hasn't made a duplicate yet.",
"mine": "<b>Measured in the exercise:</b> load re-run in INSERT mode → <b>85,716 rows for 42,858 products</b>, nothing red. With MERGE → 42,858 every time. 3-day backfill predicted then checked: still 42,858 products, zero duplicates.",
"phrase": "Rerunning any interval must give the same result.",
"fr": "Re-running any day must give the same result.",
"qa": [
[
"Your pipeline re-runs a day. Convince me it doesn't duplicate.",
"Each task that writes has a named mechanism: MERGE on the key (p_id, or order_id + p_id). I don't rely on a BigQuery primary key, which isn't enforced. And I checked it: re-running gives the same number of rows."
],
[
"Why not date.today()?",
"A retry or a backfill would produce today's data instead of the period's. The task reads data_interval_start and data_interval_end."
],
[
"Does your quality gate really block?",
"With dbt run then dbt test, the poison row reached the marts: it was an alarm. With dbt build, it stops in staging: it is a lock."
],
[
"What does catchup=False do?",
"It avoids creating all past runs at once on activation. It prevents neither retries nor backfills."
]
],
"quiz": [
[
"Which one is idempotent?",
[
"INSERT INTO table SELECT …",
"MERGE on the product key",
"Adding a log line"
],
1,
"MERGE decides per key: re-run, it creates nothing extra."
],
[
"The alert is wired to…",
[
"on_retry_callback",
"on_failure_callback",
"catchup"
],
1,
"It fires only when the task has used up its retries."
],
[
"A task uses date.today(). The March backfill gives…",
[
"March's correct data",
"31 times today's data",
"An error"
],
1,
"It ignores the run's period and reads the clock."
],
[
"The two extractions must run at the same time. You write…",
[
"extract_a >> extract_b >> load",
"[extract_a, extract_b] >> load",
"load >> [extract_a, extract_b]"
],
1,
"A list on the left creates no arrow between its elements."
]
],
"eli5": {
"why": "Everything is ready, but someone still has to start the programs by hand. We want everything to run on its own, every day.",
"steps": [
"<b>Airflow</b> is a smart alarm clock: every day, it starts the steps in the right order.",
"The <b>DAG</b> is the list of steps and their order (extract, then load, then clean).",
"If a step crashes, Airflow re-runs it on its own.",
"Danger: re-running a step that adds rows adds them twice.",
"So each step must be <b>idempotent</b>: running it 2 times = running it 1 time. You use <code>MERGE</code> instead of <code>INSERT</code>."
],
"ex": "Re-running the load with INSERT: 85,716 rows for 42,858 products. With MERGE: 42,858 every time."
}
},
{
"id": "l8",
"t": "Infrastructure as code",
"en": "Terraform",
"one": "Instead of clicking in the console, you <mark>write in a file what must exist</mark>. Terraform compares it with what really exists and proposes the difference.",
"img": {
"tag": "The picture: the house plan and the land register",
"txt": "The console and gcloud are <b>instructions</b>: “put a window here”. In the end, nobody knows what the house is supposed to be.<br>Terraform is the <b>house plan</b>. It looks at three things: the plan (your <b>config</b>), the land register (the <b>state</b>: what it knows it owns) and the real house (<b>reality</b>). <code>plan</code> shows you the differences; <code>apply</code> does the work once you've said <code>yes</code>."
},
"terms": [
[
"Provider",
"The plugin that talks to Google Cloud. In the exercise: google 8.9.0."
],
[
"Resource",
"Something Terraform creates and owns (a bucket)."
],
[
"State",
"The land register: “google_storage_bucket.scratch = this real bucket”. Without it, Terraform knows nothing."
],
[
"Backend gcs",
"The state stored in a bucket, with a lock and versions, instead of on your computer."
],
[
"plan",
"The quote for the work. Free, touches nothing."
],
[
"apply",
"The work itself. Asks for yes."
],
[
"+ ~ - -/+",
"Create / change / destroy / destroy THEN recreate (the dangerous one)."
],
[
"import",
"Telling Terraform “this thing that already exists is yours”."
],
[
"Drift",
"Reality was changed outside Terraform."
],
[
".terraform.lock.hcl",
"Pins the provider version. Gets committed."
],
[
"terraform.tfvars",
"The real values (project). Never committed."
]
],
"body": "<h2>The three everyday commands</h2>\n <ul class=\"clean\"><li><code>terraform init</code>: downloads the provider, connects the backend.</li>\n <li><code>terraform plan</code>: reads the three pictures and shows the difference. You're looking for <b>“No changes. Your infrastructure matches the configuration.”</b></li>\n <li><code>terraform apply</code>: redoes the plan, waits for <code>yes</code>, makes the changes.</li></ul>\n <h2>Drift: adopt or overwrite?</h2>\n <p>A colleague changes the lifecycle rule from 30 to 90 days in the console during an incident. At the next plan, Terraform proposes going back to 30: for it, the config is the truth. It never says the word “drift”, just “updated in-place”.</p>\n <ul class=\"clean\"><li><b>Overwrite</b>: apply, back to 30. If it was a mistake.</li>\n <li><b>Adopt</b>: write 90 in main.tf. If it was a real fix.</li></ul>\n <h2>Deleting the state</h2>\n <p>It doesn't delete the resources: they become orphans. They exist, they cost money, and Terraform wants to recreate them. With a versioned backend, you restore the previous version.</p>",
"trap": "The danger is not <code>apply</code>: it is not reading the plan, or using <code>-auto-approve</code>. A <code>-/+</code> on a bucket (changing location to EU) = all the data lost.",
"mine": "<b>Measured in the exercise:</b> plan before import = “2 to add” (Terraform wanted to recreate what existed). After import: “No changes”. The owner=… label added by hand stayed <b>invisible</b> to Terraform (it ignores labels it doesn't manage). The 30 → 90 days rule did show up as “updated in-place”. Choice made: <b>adopt</b>. State stored in <code>gs://…-tfstate/l08/default.tfstate</code>, ignored by git.",
"phrase": "The console is read-only; every change goes through plan.",
"fr": "No more clicking: everything goes through terraform plan.",
"qa": [
[
"What does Terraform bring that gcloud doesn't?",
"gcloud says what was done; Terraform says what must exist, and plan computes the difference with reality. You get a versioned list and you detect changes made elsewhere."
],
[
"Someone deletes your state this afternoon. Walk me through the morning.",
"The resources still exist but are orphans: apply would want to recreate them and fail. Our state bucket is versioned: I restore the previous version. Otherwise, I rewrite an import block per resource."
],
[
"The plan shows -/+ on bronze. What do you do?",
"I don't apply: it means destroy then recreate, so lose the data. I look for “forces replacement” to find the attribute responsible and fix the config."
],
[
"The plan wants to change a bucket although nobody touched the config.",
"That's drift. I find who changed what and why, then decide: overwrite if it was a mistake, adopt if it was intended."
]
],
"quiz": [
[
"“Plan: 2 to add” although the resources exist. Why?",
[
"Terraform is broken",
"The state is empty, it doesn't know they are its own",
"You need another provider"
],
1,
"You must adopt them with import blocks."
],
[
"The symbol that should scare you:",
[
"+",
"~",
"-/+"
],
2,
"Destroy then recreate: the bucket's contents are lost."
],
[
"Where does the state live in the course?",
[
"On each person's computer",
"In a versioned gcs bucket",
"In git"
],
1,
"Shared, locked, with the old versions."
],
[
"Which file is never committed?",
[
".terraform.lock.hcl",
"main.tf",
"terraform.tfstate"
],
2,
"The state contains secrets and must not be shared through git. The lock file, on the other hand, is committed."
]
],
"eli5": {
"why": "Since the beginning, buckets and tables have been created by hand. Nobody knows exactly what exists anymore.",
"steps": [
"With <b>Terraform</b>, you write in a file what must exist (“a bucket, in Belgium, with this rule”).",
"<code>terraform plan</code> compares the file with reality and shows the differences.",
"<code>terraform apply</code> makes the changes, after you have typed <code>yes</code>.",
"Terraform keeps a list of what it manages: the <b>state</b>. It is stored in a bucket, not on your computer.",
"If someone changes something by hand, <code>plan</code> sees it, and you decide: keep the change or go back."
],
"ex": "After declaring a bucket that already existed, plan answers “No changes”: the description matches reality."
}
},
{
"id": "l9",
"t": "Who pays for what",
"en": "FinOps",
"one": "You make the bill <mark>readable</mark>: each resource carries a label saying who it belongs to, and you prove a saving with numbers.",
"img": {
"tag": "The picture: the expense report",
"txt": "A cloud bill without labels is a €300 receipt with no detail: impossible to know who bought what. <b>Labels</b> (owner=data-team, env=dev, app=marketplace…) mean writing the department's name on each receipt.<br><br>And the budget alert is the banking app that warns you “you have spent 80%”. <b>It doesn't block your card.</b>"
},
"terms": [
[
"Label",
"A key=value tag on a resource. Applies from the moment it is set, not before."
],
[
"Convention",
"The list of compulsory keys (about 4) and why each one exists."
],
[
"Budget alert",
"Warns when a threshold is crossed. Stops nothing."
],
[
"SKU",
"One precise line of the bill (e.g. “BigQuery analysis europe-west1”)."
],
[
"Shape",
"The shape of spending over time: regular, spikes, growing…"
],
[
"Units",
"Bytes scanned, GB-months stored. Visible long before money."
],
[
"Ledger",
"The register: one row per resource, what drives its cost, the published price and the date."
],
[
"INFORMATION_SCHEMA.JOBS",
"The BigQuery table listing past queries and their bytes."
],
[
"Attribution",
"How you know which team pays: labels, one project per team, or by hand."
]
],
"body": "<h2>One optimisation, with a before and an after</h2>\n <p>Inside the free tier, money barely moves. So you measure in <b>units</b>. The course's example:</p>\n <div class=\"tscroll\"><table><tr><th>Measure</th><th>Value</th></tr>\n <tr><td>Before (hourly query)</td><td class=\"num\">4.8 GiB per run</td></tr>\n <tr><td>Change</td><td>orders partitioned by order_date</td></tr>\n <tr><td>After</td><td class=\"num\">0.4 GiB per run</td></tr>\n <tr><td>At $7.50/TiB</td><td class=\"num\">≈ €23/month saved at hourly</td></tr></table></div>\n <p>And the sentence that makes it engineering: <b>what would have told me I was wrong?</b> (e.g. if bytes hadn't gone down, the filter wasn't pruning.)</p>\n <h2>The attribution options</h2>\n <ul class=\"clean\"><li><b>Labels everywhere</b> (the course's choice): one project, attribution by query. But nothing forces people to set them.</li>\n <li><b>One project per team</b>: free attribution, a clear boundary, but more projects to manage.</li>\n <li><b>Splitting by hand</b>: someone's afternoon every month, and always wrong.</li></ul>",
"trap": "“I set up a budget alert, so we can't overspend.” Wrong: the alert <b>does not stop</b> spending. The real brake on queries is maximum_bytes_billed (lesson 4).",
"mine": "Link with lesson 8: the <code>owner=…</code> label added to the bucket during the Terraform exercise is exactly the start of a labelling convention.",
"phrase": "Label at creation; unlabelled spend is unowned spend.",
"fr": "Label from creation, otherwise nobody pays.",
"qa": [
[
"What is the most expensive thing on your platform, and how do you know?",
"I read the bill by SKU and by day (or INFORMATION_SCHEMA.JOBS if the export is empty). Inside the free tier I look at units: bytes scanned per day, GB stored."
],
[
"Does your budget alert protect against a crazy query?",
"No, it only warns. Against a crazy query, maximum_bytes_billed refuses it before billing."
],
[
"Why labels and not one project per team?",
"With a single team, labels are enough and keep one project. With ten teams, I would rather move to one project per team: the boundary is enforced, not left to good will."
]
],
"quiz": [
[
"A €50 budget alert…",
[
"Shuts services down at €50",
"Sends a message, without stopping anything",
"Refunds the overspend"
],
1,
"The course's key phrase: it does not stop."
],
[
"Resources created before labels were set…",
[
"Get labelled retroactively",
"Stay unattributed for that period",
"Cost nothing"
],
1,
"Labels only apply from the moment they are set."
],
[
"Inside the free tier, you prove a saving with…",
[
"Euros",
"Units (bytes scanned, GB stored)",
"A feeling"
],
1,
"The shape shows up in units long before money."
]
],
"eli5": {
"why": "The cloud costs money. You need to know who spends what, and prove you can spend less.",
"steps": [
"You stick a tag (<b>label</b>) on each resource: who it belongs to, for which project.",
"You can then sort the bill by tag.",
"You set a <b>budget alert</b>: it warns, but it stops nothing.",
"You find what costs the most, and how it changes over time.",
"You make one optimisation and measure before / after (in data read, if the money doesn't move yet)."
],
"ex": "Splitting a table by date: from 4.8 GiB read per query to 0.4 GiB."
}
},
{
"id": "l10",
"t": "Who is allowed to see",
"en": "Security & governance",
"one": "You <mark>classify every column</mark> (public, internal, personal data…), decide who can read which class, enforce it, and know how to <mark>erase a person</mark> (GDPR).",
"img": {
"tag": "The picture: a hospital's badges",
"txt": "In a hospital, reception sees your name, the doctor sees your file, the accountant sees the invoice but not the diagnosis. You don't hand out one badge per drawer: you <b>classify the drawers</b> (public, confidential, medical) and give one badge per class.<br><br>Same thing for columns: <code>shipping_details.phone</code> is “pii.contact”, <code>orders.order_date</code> is “internal”. A new table with a phone number is protected as soon as it is classified."
},
"terms": [
[
"Classification",
"Giving each column a class: public, internal, pii.contact, unclassified."
],
[
"PII",
"Data that identifies a person: name, phone, address, email."
],
[
"unclassified",
"For free text (customer reviews): we don't know what it contains, and we say so honestly."
],
[
"Owner",
"The person or role who can answer questions about the column."
],
[
"Access matrix",
"The table role × class × right (read or not)."
],
[
"Policy tag",
"In BigQuery, the tag on a column that blocks reading for unauthorised people."
],
[
"Taxonomy",
"The list of policy tags (the classes)."
],
[
"Audit log",
"The log of who read what. Read it BEFORE blocking, so you don't break your own pipeline."
],
[
"Erasure",
"The right to be forgotten: find a person and delete them everywhere."
],
[
"Time travel",
"BigQuery keeps old versions for 7 days (168 h). A deleted row survives there."
]
],
"body": "<h2>The access matrix (the course's example)</h2>\n <div class=\"tscroll\"><table><tr><th>Role</th><th>public</th><th>internal</th><th>pii.contact</th><th>unclassified</th></tr>\n <tr><td>Analyst</td><td>reads</td><td>reads</td><td>no</td><td>no</td></tr>\n <tr><td>Engineer</td><td>reads</td><td>reads</td><td>reads</td><td>reads</td></tr>\n <tr><td>ML account</td><td>reads</td><td>reads</td><td>no</td><td>no</td></tr></table></div>\n <p>For each “no”, you say how to request an exception. People get around a rule that has no exception path.</p>\n <h2>Erasing someone: the honest version</h2>\n <ul class=\"clean\"><li>Find every table and column that contains their identifier.</li>\n <li>Silver and gold: delete at the source then <code>dbt build</code>.</li>\n <li>Bronze: often by hand, and say so.</li>\n <li>The copies that survive: the bucket's old versions, BigQuery's time travel (7 days).</li>\n <li>How you prove it was done.</li></ul>",
"trap": "Claiming an erasure is complete when the bucket's versions keep the person for 30 days. The teacher prefers “we haven't solved step 4” to a false promise.",
"mine": "Seen without knowing it in lesson 8: the Terraform plan of a BigQuery dataset shows <code>max_time_travel_hours = \"168\"</code>. That's the copy that survives 7 days after an erasure.",
"phrase": "Classify data before granting access.",
"fr": "Classify the data before granting access.",
"qa": [
[
"An analyst needs the city but not the street. What happens?",
"The city is classified internal, the street pii.contact. The analyst reads the city; for the street they follow the exception process. You can also give them a view that only exposes the city."
],
[
"Why classify rather than one view per consumer?",
"One rule per class survives new tables: a new phone number is protected as soon as it is classified. One view per consumer means a view to maintain forever. The risk: a badly configured tag silently protects nothing, so you check by getting refused."
],
[
"Is your erasure complete?",
"Silver and gold yes, after dbt build. Bronze by hand. But the bucket's versions and the 7-day time travel keep copies: I write it down and say what would need to be done."
]
],
"quiz": [
[
"The free text of customer reviews is classified…",
[
"public",
"internal",
"unclassified"
],
2,
"We don't know what it contains: we say so honestly."
],
[
"Before setting a policy tag, you look at…",
[
"The weather",
"The audit log, to know who reads the column",
"Nothing"
],
1,
"The tag acts immediately: it can break your own pipeline."
],
[
"A row deleted from BigQuery can still exist through…",
[
"Time travel (7 days)",
"The browser cache",
"Nothing"
],
0,
"max_time_travel_hours = 168."
]
],
"eli5": {
"why": "The data contains names, phone numbers, addresses. Not everyone should see everything, and the law (GDPR) lets a customer ask to be erased.",
"steps": [
"You give each column a category: public, internal, personal data, or “we don't know” (free text).",
"You build a table: which role can read which category.",
"In BigQuery, you put a tag (<b>policy tag</b>) on sensitive columns: people who aren't allowed are refused.",
"To erase a customer: you search for them everywhere, delete them, and rebuild silver and gold.",
"You say honestly what remains: copies kept for a few days (old versions, time travel)."
],
"ex": "BigQuery keeps a copy of deleted data for 7 days (168 hours)."
}
}
]
};
