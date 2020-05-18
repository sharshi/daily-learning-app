import { JewishDate, HebrewDateFormatter, JewishCalendar } from "kosher-zmanim";

export default hi = date => {
  // console.log(KZ.HebrewDateFormatter);
  const JD = new JewishDate();
  const HDF = new HebrewDateFormatter();
  const JK = new JewishCalendar(date);
  HDF.setHebrewFormat(true);
  console.log(HDF.format(JD));
  console.log(HDF.formatHebrewNumber(4347));
  const parsha = JK.getParsha(date);
  const holiday = JK.getYomTovIndex(date);
  const roshChodesh = JK.isRoshChodesh(date);
  console.log(HDF.getTransliteratedHolidayList()[holiday]);
  console.log(HDF.getTransliteratedParshiosList()[parsha]);
  console.log(roshChodesh ? "it is rosh chodesh" : null);
}