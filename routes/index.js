import express from 'express';
const router = express.Router();
import fs from 'fs';
import convert from 'xml-js';
import { parse, stringify } from 'himalaya';
import smileys from '../src/emojiList.json';
import Cml from '../src/Cml';

router.post('/XamlToCml', (req, res) => {
  var json = convert.xml2json(req.body, { compact: false, spaces: 4 });
  res.send(json);
});

router.post('/CmlToXaml', (req, res) => {
  var json = convert.json2xml(req.body, { compact: false, spaces: 4 });
  res.send(json);
});

router.post('/CmlToHtml', (req, res) => {
  const parsedHtmlJson = Cml.CmlToHtml(req.body);
  res.send(stringify(parsedHtmlJson));
});

router.post('/HtmlToCml', (req, res) => {
  const json = parse(req.body);
  res.send(json);
});

export default router;