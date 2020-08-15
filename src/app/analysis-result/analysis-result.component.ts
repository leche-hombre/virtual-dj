import { Component, OnInit } from '@angular/core';
import {AudioAnalysis} from '../audio-analysis';
import {AudioAnalyserService} from '../audio-analyser.service';

@Component({
  selector: 'app-analysis-result',
  templateUrl: './analysis-result.component.html',
  styleUrls: ['./analysis-result.component.scss']
})
export class AnalysisResultComponent implements OnInit {

  analysis: AudioAnalysis;

  constructor(private audioAnalyserService: AudioAnalyserService) {
    this.analysis = this.audioAnalyserService.analyseAudioFile({} as File);
  }

  ngOnInit() {}

  showWaveform() {
    this.audioAnalyserService.displayWaveForm({
      waveformColor: 'violet',
      container: '#waveform',
      progressColor: 'purple'
    });
  }
}
