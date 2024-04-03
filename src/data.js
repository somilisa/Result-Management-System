export const calculateOverallGrade = (intern) => {
  const { scores } = intern;
  return scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
};

export const internsData = [
  {
    id: 1,
    name: "Ebere Anene",
    attendance: 49,
    appraisal: 4.9,
    scores: [8, 9, 7, 9],
  },
  {
    id: 2,
    name: "Chinwendu Osita",
    attendance: 53,
    appraisal: 4.2,
    scores: [8, 9, 8, 9],
  },
  {
    id: 3,
    name: "Chijoke Chukwuebuka",
    attendance: 94,
    appraisal: 3.8,
    scores: [5, 7, 8, 9],
  },
  {
    id: 4,
    name: "Chibuikem Udeh",
    attendance: 100,
    appraisal: 2.0,
    scores: [9, 10, 7, 9],
  },
  {
    id: 5,
    name: "Charity Umeh",
    attendance: 76,
    appraisal: 3.3,
    scores: [7, 10, 8, 9],
  },
  {
    id: 6,
    name: "Innocent Akah",
    attendance: 83,
    appraisal: 4,
    scores: [6, 9, 7, 8],
  },
  {
    id: 7,
    name: "Divine Agu",
    attendance: 64,
    appraisal: 3.5,
    scores: [5, 0, 4, 2],
  },
  {
    id: 8,
    name: "God's Favour Ezeh",
    attendance: 88,
    appraisal: 4.1,
    scores: [7, 8, 9, 10],
  },
  {
    id: 9,
    name: "Tolulope Chukwuebuka",
    attendance: 61,
    appraisal: 3.4,
    scores: [2, 4, 6, 8],
  },
  {
    id: 10,
    name: "Bright",
    attendance: 3.8,
    appraisal: 4.2,
    scores: [5, 4, 3, 2],
  },
];

internsData.forEach((intern) => {
  intern.overAllGrade = calculateOverallGrade(intern);
});

export const sortedInterns = [...internsData].sort(
  (a, b) => b.overallGrade - a.overallGrade
);
