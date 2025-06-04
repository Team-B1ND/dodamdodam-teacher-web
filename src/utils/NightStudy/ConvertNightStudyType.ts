export const convertNightStudyType = (type: string): string => {
    const typeMap: { [key: string]: string } = {
      'NIGHT_STUDY_1': '심자1',
      'NIGHT_STUDY_2': '심자2',
      'NIGHT_STUDY_3': '심자3',
    };
    
    return typeMap[type] || type;
  };