// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM
import renderToDOM from '../utils/renderToDom';
import studentsOnDom from '../utils/sample_data/studentsOnDom';
import { houses, students } from '../utils/sample_data/data';

// Create a new ID for the students
const createId = (array) => {
  if (array.length) {
    const idArray = array.map((el) => el.id);
    return Math.max(...idArray) + 1;
  }
  return 0;
};

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array
const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');

    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });

    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};

const form = () => {
  const domString = `<form id="sorting" class="d-flex flex-column form-floating ">
      <input
      type="text"
      class="form-control mb-1"
      id="student-name"
      placeholder="Enter a name"
      required
    />
    <label for="floatingInputValue">Name to be sorted</label>
  <button type="submit" class="btn btn-success">Get Sorted!</button>
  </form>`;

  renderToDOM('#form-container', domString);

  // has to be put on the DOM after form is on DOM, not before
  // on form submit, sort student
  document.querySelector('#sorting').addEventListener('submit', sortStudent);
};

export { form, sortStudent, createId };
