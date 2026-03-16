import dayjs from "dayjs";

export function Footer() {
  return (
    <footer>
      <p>&copy; {dayjs().year()} Abner J. Silva. All rights reserved.</p>
    </footer>
  );
}
