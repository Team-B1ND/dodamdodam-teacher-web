import dayjs from 'dayjs'

class DateTransform {
  public hyphen(date?: string): string {
    return dayjs(date).format('YYYY-MM-DD')
  }

  public period(date?: string): string {
    return dayjs(date).format('YYYY.MM.DD')
  }

  public slash(date?: string): string {
    return dayjs(date).format('YYYY/MM/DD')
  }

  public fullDate(date?: string): string {
    return dayjs(date).format('YYYY-MM-DD HH:mm')
  }

  public startAtToEndAt(startAt: string, endAt: string): string {
    return `${dayjs(startAt).format('M월 D일')} ~ ${dayjs(endAt).format(
      'M월 D일'
    )}`
  }
}

const dateTransform = new DateTransform()
export default dateTransform
