export interface GroupRepository {
  createGroup: (group: GroupWriteData) => Promise<void>;
}

export interface GroupWriteData {
  name: string;
  description: string;
}
