export const MARKS_10 = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ],
  MARKS_100 = [
    { value: 0, label: '0' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 75, label: '75' },
    { value: 100, label: '100' },
  ],
  getBgColor = (sliderType, value) => {
    if (sliderType === 'M100') {
      if (value < 25) return 'green';
      else if (value >= 25 && value <= 49) return 'yellow';
      else if (value >= 50 && value <= 74) return 'orange';
      else if (value >= 75 && value <= 94) return 'crimson';
      else return 'red';
    } else {
      if (value < 3) return 'green';
      else if (value >= 3 && value <= 5) return 'yellow';
      else if (value >= 6 && value <= 7) return 'orange';
      else if (value >= 8 && value <= 9) return 'crimson';
      else return 'red';
    }
  };
