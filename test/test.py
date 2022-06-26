from music21 import *
c = converter.parse('./ttls.musicxml')
mf = midi.translate.streamToMidiFile(c)
mf.open('./midi.mid', 'wb')
mf.write()
mf.close()
