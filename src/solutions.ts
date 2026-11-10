// Problem - 1:
const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0) {
    return 0;
  } else if (!multiplier) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

//Problem - 2:
type Value = string | number | boolean;

const processInput = (value: Value) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

// Problem - 3:
type CoordinateValue = [number, number, string];
const formatCoordinate = (value: CoordinateValue) => {
  const [latitude, longitude, location] = value;
  return `Location: ${location} (${latitude}, ${longitude})`;
};

// Problem 4:
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

// Problem 5:
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (course: Course[], minStudents: number) => {
  return course.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

// Problem 6:
const pluckValues = <T, K extends keyof T>(users: T[], arg: K): T[K][] => {
  return users.map((user) => user[arg]);
};
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(pluckValues(users, "id"));
// console.log(pluckValues(users, "id"));

// Problem - 7:
class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() {
    return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `"Manager of ${this.department}: ${this.name}"`;
  }
}

// Sample Input:
const manager = new Manager("Alice", 50000, "Engineering");

// Problem 8:
const validateAgeAsync = (age: number): Promise<string> => {
  if (age < 18) {
    return Promise.reject(new Error("Access Denied: Must be 18 or older"));
  } else {
    return new Promise((resolve) =>
      setTimeout(() => resolve("Access Granted"), 1000),
    );
  }
};
console.log(await validateAgeAsync(20));
