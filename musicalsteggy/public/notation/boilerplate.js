  ////////////////////////////////////////////////
 // Constants for general boilerplate MusicXML //
////////////////////////////////////////////////

// header for general sheet music with title, formatting, and instrumentation
export const HEAD = '<?xml version="1.0" encoding="UTF-8"?>' +
'<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">' +
'<score-partwise version="3.1">' +
  // title
  '<work>' +
    '<work-title>Twinkle Twinkle Little Star</work-title>' +
  '</work>' +
  '<identification>' +
    '<encoding>' +
      '<software>MuseScore 3.6.2</software>' +
      '<encoding-date>2022-06-20</encoding-date>' +
      '<supports element="accidental" type="yes"/>' +
      '<supports element="beam" type="yes"/>' +
      '<supports element="print" attribute="new-page" type="yes" value="yes"/>' +
      '<supports element="print" attribute="new-system" type="yes" value="yes"/>' +
      '<supports element="stem" type="yes"/>' +
    '</encoding>' +
  '</identification>' +
  // formatting
  '<defaults>' +
    '<scaling>' +
      '<millimeters>6.99911</millimeters>' +
      '<tenths>40</tenths>' +
    '</scaling>' +
    '<page-layout>' +
      '<page-height>1596.77</page-height>' +
      '<page-width>1233.87</page-width>' +
      '<page-margins type="even">' +
        '<left-margin>85.7252</left-margin>' +
        '<right-margin>85.7252</right-margin>' +
        '<top-margin>85.7252</top-margin>' +
        '<bottom-margin>85.7252</bottom-margin>' +
      '</page-margins>' +
      '<page-margins type="odd">' +
        '<left-margin>85.7252</left-margin>' + 
        '<right-margin>85.7252</right-margin>' +
        '<top-margin>85.7252</top-margin>' +
        '<bottom-margin>85.7252</bottom-margin>' +
      '</page-margins>' +
    '</page-layout>' +
    '<word-font font-family="Edwin" font-size="10"/>' +
    '<lyric-font font-family="Edwin" font-size="10"/>' +
  '</defaults>' +
  // instrumentation
  '<part-list>' +
    // main melody piano 1
    '<part-group type="start" number="1">' +
      '<group-symbol>brace</group-symbol>' +
    '</part-group>' +
    '<score-part id="P1">' +
      '<part-name>Piano 1</part-name>' +
      '<part-abbreviation>Pno. 1</part-abbreviation>' +
      '<score-instrument id="P1-I1">' +
        '<instrument-name>Piano</instrument-name>' +
        '</score-instrument>' +
      '<midi-device id="P1-I1" port="1"></midi-device>' +
      '<midi-instrument id="P1-I1">' +
        '<midi-channel>1</midi-channel>' +
        '<midi-program>1</midi-program>' +
        '<volume>100</volume>' +
        '<pan>0</pan>' +
      '</midi-instrument>' +
    '</score-part>' +
    // accompaniment piano 2
    '<score-part id="P2">' +
      '<part-name>Piano 2</part-name>' +
      '<part-abbreviation>Pno. 2</part-abbreviation>' +
      '<score-instrument id="P2-I1">' +
        '<instrument-name>Piano</instrument-name>' +
      '</score-instrument>' +
      '<midi-device id="P2-I1" port="1"></midi-device>' +
      '<midi-instrument id="P2-I1">' +
        '<midi-channel>2</midi-channel>' +
        '<midi-program>1</midi-program>' +
        '<volume>80</volume>' +
        '<pan>0</pan>' +
      '</midi-instrument>' +
    '</score-part>' +
    '<part-group type="stop" number="1"/>' +
  '</part-list>'

// starting information required in first measure, such as key signature, time signature, clefs, and staves
export const START = '<print>' +
  '<system-layout>' +
    '<system-margins>' +
      '<left-margin>65.90</left-margin>' +
      '<right-margin>0.00</right-margin>' +
    '</system-margins>' +
    '<top-system-distance>170.00</top-system-distance>' +
  '</system-layout>' +
  '<staff-layout number="2">' +
    '<staff-distance>65.00</staff-distance>' +
  '</staff-layout>' +
'</print>' +
'<attributes>' +
  '<divisions>1</divisions>' +
  '<key>' +
    '<fifths>0</fifths>' +
  '</key>' +
  '<time>' +
    '<beats>4</beats>' +
    '<beat-type>4</beat-type>' +
  '</time>' +
  '<staves>2</staves>' +
  '<clef number="1">' +
    '<sign>G</sign>' +
    '<line>2</line>' +
  '</clef>' +
  '<clef number="2">' +
    '<sign>F</sign>' +
    '<line>4</line>' +
  '</clef>' +
'</attributes>'

// end of the file
export const TAIL = '</score-partwise>'

// end bar line
export const BAR = '<barline location="right">' +
'<bar-style>light-heavy</bar-style>' +
'</barline>'

// stop bar line
export const STOP = '<barline location="right">' +
'<bar-style>light-light</bar-style>' +
'</barline>'
