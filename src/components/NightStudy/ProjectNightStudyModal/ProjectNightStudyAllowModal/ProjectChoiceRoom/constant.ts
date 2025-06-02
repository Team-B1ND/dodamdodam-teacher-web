export const PROJECT_LAB_ROOM_MAP = {
    "랩12실": "LAB_12",
    "랩13실": "LAB_13",
    "랩14실": "LAB_14",
    "랩15실": "LAB_15",
    "랩16실": "LAB_16"
  };
  export type ProjectLabLabel = keyof typeof PROJECT_LAB_ROOM_MAP;

  
  export const PROJECT_LAB_ROOMS: ProjectLabLabel[] = Object.keys(PROJECT_LAB_ROOM_MAP) as ProjectLabLabel[];
  