import{_ as t,c as e,o as a,N as l}from"./chunks/framework.184eb22e.js";const y=JSON.parse('{"title":"CUI Design","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plugins/components/datepicker/datepicker-design.md","lastUpdated":1678271575000}'),i={name:"reference/plugins/components/datepicker/datepicker-design.md"},n=l('<h1 id="cui-design" tabindex="-1">CUI Design <a class="header-anchor" href="#cui-design" aria-label="Permalink to &quot;CUI Design&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>DatePicker component allows users to input or select a date using natural language in conversational interactions. It can recognize various ways of describing a date, such as the day of the week, day of the month, and date of the year, and will interact with the user to finalize a specific date. It is suitable for the context in which it appears.</p><p>Common use cases include:</p><ul><li>Making a restaurant reservation.</li><li>Scheduling a meeting.</li></ul><p>Common interaction logics include:</p><ul><li>Ask for a date.</li><li>Provide date options and help to shrink candidate dates.</li><li>Pass business logic verification.</li><li>Inform or double check with end-user the date value.</li></ul><h2 id="schema-representation" tabindex="-1">Schema Representation <a class="header-anchor" href="#schema-representation" aria-label="Permalink to &quot;Schema Representation&quot;">​</a></h2><p>When the bot is making value recommendations, the auxiliary slots below can help the user to finalize a specific date through interaction.</p><h3 id="main-slot" tabindex="-1">Main Slot <a class="header-anchor" href="#main-slot" aria-label="Permalink to &quot;Main Slot&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Slot Label</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Expression Input</th></tr></thead><tbody><tr><td style="text-align:left;">date</td><td style="text-align:left;"><code>java.time.LocalDate</code></td><td style="text-align:left;">Always ask. Matches a certain calendar date.</td><td style="text-align:left;"><em>&quot;today&quot;</em>, <em>&quot;this monday&quot;</em>, <em>&quot;the 14th of February&quot;</em>, <em>&quot;April 14, 2023&quot;</em>, <em>&quot;2023-01-18&quot;</em>, <em>&quot;the last Tuesday of October 2022&quot;</em></td></tr></tbody></table><h3 id="auxiliary-slots" tabindex="-1">Auxiliary Slots <a class="header-anchor" href="#auxiliary-slots" aria-label="Permalink to &quot;Auxiliary Slots&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Slot Label</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Expression Input</th></tr></thead><tbody><tr><td style="text-align:left;">dayOfWeek</td><td style="text-align:left;"><code>java.time.DayOfWeek</code></td><td style="text-align:left;">The 7 days of the week, from 1 (Monday) to 7 (Sunday).</td><td style="text-align:left;"><em>&quot;monday&quot;</em></td></tr><tr><td style="text-align:left;">month</td><td style="text-align:left;"><code>java.time.Month</code></td><td style="text-align:left;">Month of a year, from 1 (January) to 12 (December).</td><td style="text-align:left;"><em>&quot;January&quot;</em></td></tr><tr><td style="text-align:left;">monthDay</td><td style="text-align:left;"><code>java.time.MonthDay</code></td><td style="text-align:left;">A month-day in the ISO-8601 calendar system, the combination of a month and day-of-month.</td><td style="text-align:left;"><em>&quot;15th February&quot;</em>, <em>&quot;15 of February&quot;</em>, <em>&quot;the 15th of February&quot;</em></td></tr><tr><td style="text-align:left;">year</td><td style="text-align:left;"><code>java.time.Year</code></td><td style="text-align:left;">A year in the ISO-8601 calendar system.</td><td style="text-align:left;"><em>2023</em></td></tr><tr><td style="text-align:left;">yearMonth</td><td style="text-align:left;"><code>java.time.YearMonth</code></td><td style="text-align:left;">A year-month in the ISO-8601 calendar system, the combination of a year and month.</td><td style="text-align:left;"><em>&quot;October 2023&quot;</em></td></tr><tr><td style="text-align:left;">period</td><td style="text-align:left;"><code>java.time.Period</code></td><td style="text-align:left;">The quantity or amount of time in terms of years, months and days.</td><td style="text-align:left;"><em>&quot;4 days&quot;</em>, <em>&quot;coming week&quot;</em>, <em>&quot;next month&quot;</em>, <em>&quot;this quarter&quot;</em></td></tr></tbody></table><h2 id="contextual-snippet" tabindex="-1">Contextual Snippet <a class="header-anchor" href="#contextual-snippet" aria-label="Permalink to &quot;Contextual Snippet&quot;">​</a></h2><h3 id="_1-happy-path" tabindex="-1">1. Happy Path <a class="header-anchor" href="#_1-happy-path" aria-label="Permalink to &quot;1. Happy Path&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Snippet 1</th><th style="text-align:left;">Happy Path</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Description</strong></td><td style="text-align:left;">Defines what happens if everything goes well.</td></tr><tr><td style="text-align:left;"><strong>Precondition</strong></td><td style="text-align:left;">complete = <code>false</code></td></tr><tr><td style="text-align:left;"><strong>Annotated Conversation</strong></td><td style="text-align:left;"><ul><li> 🤖 : Which date would you like？ <br>  - 2023-01-19 <br>  - 2023-01-20 <br>  - 2023-01-21 </li><li> 😊 : Jan 19. </li><li> 🤖 : Get, your date is 2023-01-19. </li></ul></td></tr><tr><td style="text-align:left;"><strong>End State</strong></td><td style="text-align:left;"><ul><li>date = <code>2023-01-19</code></li><li>complete = <code>true</code></li></ul></td></tr></tbody></table><h3 id="_2-date-value-can-not-pass-verification" tabindex="-1">2. Date Value Can NOT Pass Verification <a class="header-anchor" href="#_2-date-value-can-not-pass-verification" aria-label="Permalink to &quot;2. Date Value Can NOT Pass Verification&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Snippet 2</th><th style="text-align:left;">Date Value Can NOT Pass Verification</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Description</strong></td><td style="text-align:left;">After the user specifies a date, the date does not pass validation. Bot prompts the verification failure message and asks the user again.</td></tr><tr><td style="text-align:left;"><strong>Precondition</strong></td><td style="text-align:left;">complete = <code>false</code></td></tr><tr><td style="text-align:left;"><strong>Annotated Conversation</strong></td><td style="text-align:left;"><ul><li> 😊 : Jan 19. </li><li> 🤖 : The date is not available. Which date would you like? <br>  - 2023-01-20 <br>  - 2023-01-21 <br>  - 2023-01-22 </li></ul></td></tr><tr><td style="text-align:left;"><strong>End State</strong></td><td style="text-align:left;">complete = <code>false</code></td></tr></tbody></table><h3 id="_3-user-provides-partial-inform" tabindex="-1">3. User Provides Partial Inform <a class="header-anchor" href="#_3-user-provides-partial-inform" aria-label="Permalink to &quot;3. User Provides Partial Inform&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Snippet 3</th><th style="text-align:left;">User Provides Partial Inform</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Description</strong></td><td style="text-align:left;">After the bot provides candidates, the user proposes some conditions to narrow down the available options.</td></tr><tr><td style="text-align:left;"><strong>Precondition</strong></td><td style="text-align:left;">complete = <code>false</code></td></tr><tr><td style="text-align:left;"><strong>Annotated Conversation</strong></td><td style="text-align:left;"><ul><li> 🤖 : Which date would you like？ <br>  - 2023-01-19 <br>  - 2023-01-20 <br>  - 2023-01-21 </li><li> 😊 : mon or tues. </li><li> 🤖 : Here are some optins for you: <br>  - 2023-01-23 <br>  - 2023-01-24 <br>  - 2023-01-30 <br>  - 2023-01-31</li></ul></td></tr><tr><td style="text-align:left;"><strong>End State</strong></td><td style="text-align:left;">complete = <code>false</code></td></tr></tbody></table><h3 id="_4-user-change-mind" tabindex="-1">4. User Change Mind <a class="header-anchor" href="#_4-user-change-mind" aria-label="Permalink to &quot;4. User Change Mind&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Snippet 4</th><th style="text-align:left;">User Change Mind</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Description</strong></td><td style="text-align:left;">After the date determined by the user, the user changes his mind.</td></tr><tr><td style="text-align:left;"><strong>Precondition</strong></td><td style="text-align:left;"><ul><li>date = <code>2023-01-19</code></li><li>complete = <code>true</code></li></ul></td></tr><tr><td style="text-align:left;"><strong>Annotated Conversation</strong></td><td style="text-align:left;"><ul><li> 😊 : Wait, I think Jan 30 is better. </li><li> 🤖 : Get, your date is changed to 2023-01-30. </li></ul></td></tr><tr><td style="text-align:left;"><strong>End State</strong></td><td style="text-align:left;"><ul><li>date = <code>2023-01-30</code></li><li>complete = <code>true</code></li></ul></td></tr></tbody></table>',22),o=[n];function d(r,s,h,c,u,g){return a(),e("div",null,o)}const m=t(i,[["render",d]]);export{y as __pageData,m as default};