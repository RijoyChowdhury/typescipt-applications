import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReporter } from './reporters/consoleReporter';
import { HtmlReporter } from './reporters/htmlReporter';

// refer inheritance folder for inheritance pattern
const csvReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvReader);
reader.load();

const summarizer = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReporter()
);
summarizer.buildAndPrintReport(reader.data);
const htmlSummarizer = Summary.winsAnalysisWithHtmlReport('Arsenal');
htmlSummarizer.buildAndPrintReport(reader.data);
