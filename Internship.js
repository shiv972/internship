import React from "react";
import "./style.css";

const InternshipReport = () => {
  return (
    <div>
      <header>
        <h1>Internship Project Website</h1>
        <nav>
          <ul>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#episodes">Episodes</a></li>
            <li><a href="#references">References</a></li>
            <li><a href="#appendices">Appendices</a></li>
          </ul>
        </nav>
      </header>

      <section id="timeline">
        <h2>Weekly Activity Timeline</h2>
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Tasks Done</th>
              <th>Competency</th>
              <th>Time (hrs)</th>
              <th>Week</th>
              <th>Episode</th>
              <th>Proof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Company Orientation & Documentation</td>
              <td>
                <ul>
                  <li>Understood company structure</li>
                  <li>Read documentation standards</li>
                  <li>Organized internal folders</li>
                </ul>
              </td>
              <td>Communication, Documentation</td>
              <td>8</td>
              <td>Week 1</td>
              <td>Episode 1</td>
              <td><a href="#">Signed Doc</a></td>
            </tr>
            <tr>
              <td>Website Development</td>
              <td>
                <ul>
                  <li>Created buttons and sections</li>
                  <li>Linked CSS and JS</li>
                  <li>Made layout responsive</li>
                </ul>
              </td>
              <td>HTML/CSS, UI/UX</td>
              <td>14</td>
              <td>Week 3</td>
              <td>Episode 3</td>
              <td><a href="#">GitHub</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="episodes">
        <h2>Episode 1: High-Fidelity Mock-ups</h2>
        <p><strong>Related Activity:</strong> High-Fidelity Mock-ups for Secura Project (Week 1–2)</p>
        <ul>
          <li>Created UI mock-ups for Secura project – <em>Interface Design</em></li>
          <li>Developed layouts for key pages – <em>Front-end Design</em></li>
          <li>Collaborated with development team – <em>Teamwork</em></li>
        </ul>
        <p>
          Designed high-fidelity UI mock-ups using Uizard. Key challenges included creating a responsive layout and collecting feedback to refine the interface.
        </p>
      </section>

      <section id="references">
        <h2>References</h2>
        <ol>
          <li>W3Schools – HTML/CSS/JS Guide</li>
          <li>MDN Web Docs – JavaScript Documentation</li>
          <li>React Documentation (Meta)</li>
          <li>Bootstrap Responsive Design</li>
          <li>GitHub – Project Source Code</li>
          <li>Internship Guide 2024 – University Portal</li>
        </ol>
      </section>

      <section id="appendices">
        <h2>Appendices</h2>

        <h3>Appendix A: File Structure</h3>
        <pre>
my-internship-website/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.js
│   └── index.js
        </pre>

        <h3>Appendix B: Screenshots</h3>
        <ul>
          <li><strong>Week 1:</strong> Document Organization Screenshot</li>
          <li><strong>Week 3:</strong> Interactive Buttons Page</li>
          <li><strong>Week 10:</strong> Responsive Form Page</li>
        </ul>

        <h3>Appendix C: Sample Code</h3>
        <pre>
{`<button class="btn">Click Me</button>`}
        </pre>
        <pre>
{`const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Form submitted!");
});`}
        </pre>
      </section>

      <footer>
        <p>&copy; 2025 Internship Report | Designed by Intern</p>
      </footer>

      <script src="./script.js"></script>
    </div>
  );
};

export default InternshipReport;
