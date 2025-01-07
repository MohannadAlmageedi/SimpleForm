const steps = document.querySelectorAll('.step');
let currentStep = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

function updateStep() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
    });

    prevBtn.classList.toggle('hidden', currentStep === 0);
    nextBtn.classList.toggle('hidden', currentStep === steps.length - 1);
    submitBtn.classList.toggle('hidden', currentStep !== steps.length - 1);
}

nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzacUOdeH0gwrHbgNxD_BneZPg0YEuttkzRRUJSvAAOatTL6AHN1u3GFfrkHT0nXfRx/exec';
    const formData = new FormData(this);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => alert('تم إرسال الاستبيان بنجاح!'))
        .catch(error => alert('حدث خطأ أثناء إرسال الاستبيان. حاول مرة أخرى.'));
});

updateStep();
