"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Jerusalem"] = {
	"guess" : helpers.makeTestGuess("Asia/Jerusalem", { offset: false, abbr: true }),

	"1917" : helpers.makeTestYear("Asia/Jerusalem", [
		["1917-12-31T21:39:19+00:00", "23:59:59", "JMT", -8440 / 60],
		["1917-12-31T21:39:20+00:00", "23:39:20", "IST", -120]
	]),

	"1940" : helpers.makeTestYear("Asia/Jerusalem", [
		["1940-05-31T21:59:59+00:00", "23:59:59", "IST", -120],
		["1940-05-31T22:00:00+00:00", "01:00:00", "IDT", -180]
	]),

	"1942" : helpers.makeTestYear("Asia/Jerusalem", [
		["1942-10-31T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1942-10-31T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1943" : helpers.makeTestYear("Asia/Jerusalem", [
		["1943-03-31T23:59:59+00:00", "01:59:59", "IST", -120],
		["1943-04-01T00:00:00+00:00", "03:00:00", "IDT", -180],
		["1943-10-31T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1943-10-31T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1944" : helpers.makeTestYear("Asia/Jerusalem", [
		["1944-03-31T21:59:59+00:00", "23:59:59", "IST", -120],
		["1944-03-31T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1944-10-31T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1944-10-31T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1945" : helpers.makeTestYear("Asia/Jerusalem", [
		["1945-04-15T21:59:59+00:00", "23:59:59", "IST", -120],
		["1945-04-15T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1945-10-31T22:59:59+00:00", "01:59:59", "IDT", -180],
		["1945-10-31T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"1946" : helpers.makeTestYear("Asia/Jerusalem", [
		["1946-04-15T23:59:59+00:00", "01:59:59", "IST", -120],
		["1946-04-16T00:00:00+00:00", "03:00:00", "IDT", -180],
		["1946-10-31T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1946-10-31T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1948" : helpers.makeTestYear("Asia/Jerusalem", [
		["1948-05-22T21:59:59+00:00", "23:59:59", "IST", -120],
		["1948-05-22T22:00:00+00:00", "02:00:00", "IDDT", -240],
		["1948-08-31T19:59:59+00:00", "23:59:59", "IDDT", -240],
		["1948-08-31T20:00:00+00:00", "23:00:00", "IDT", -180],
		["1948-10-31T22:59:59+00:00", "01:59:59", "IDT", -180],
		["1948-10-31T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"1949" : helpers.makeTestYear("Asia/Jerusalem", [
		["1949-04-30T21:59:59+00:00", "23:59:59", "IST", -120],
		["1949-04-30T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1949-10-31T22:59:59+00:00", "01:59:59", "IDT", -180],
		["1949-10-31T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"1950" : helpers.makeTestYear("Asia/Jerusalem", [
		["1950-04-15T21:59:59+00:00", "23:59:59", "IST", -120],
		["1950-04-15T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1950-09-14T23:59:59+00:00", "02:59:59", "IDT", -180],
		["1950-09-15T00:00:00+00:00", "02:00:00", "IST", -120]
	]),

	"1951" : helpers.makeTestYear("Asia/Jerusalem", [
		["1951-03-31T21:59:59+00:00", "23:59:59", "IST", -120],
		["1951-03-31T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1951-11-10T23:59:59+00:00", "02:59:59", "IDT", -180],
		["1951-11-11T00:00:00+00:00", "02:00:00", "IST", -120]
	]),

	"1952" : helpers.makeTestYear("Asia/Jerusalem", [
		["1952-04-19T23:59:59+00:00", "01:59:59", "IST", -120],
		["1952-04-20T00:00:00+00:00", "03:00:00", "IDT", -180],
		["1952-10-18T23:59:59+00:00", "02:59:59", "IDT", -180],
		["1952-10-19T00:00:00+00:00", "02:00:00", "IST", -120]
	]),

	"1953" : helpers.makeTestYear("Asia/Jerusalem", [
		["1953-04-11T23:59:59+00:00", "01:59:59", "IST", -120],
		["1953-04-12T00:00:00+00:00", "03:00:00", "IDT", -180],
		["1953-09-12T23:59:59+00:00", "02:59:59", "IDT", -180],
		["1953-09-13T00:00:00+00:00", "02:00:00", "IST", -120]
	]),

	"1954" : helpers.makeTestYear("Asia/Jerusalem", [
		["1954-06-12T21:59:59+00:00", "23:59:59", "IST", -120],
		["1954-06-12T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1954-09-11T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1954-09-11T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1955" : helpers.makeTestYear("Asia/Jerusalem", [
		["1955-06-10T23:59:59+00:00", "01:59:59", "IST", -120],
		["1955-06-11T00:00:00+00:00", "03:00:00", "IDT", -180],
		["1955-09-10T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1955-09-10T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1956" : helpers.makeTestYear("Asia/Jerusalem", [
		["1956-06-02T21:59:59+00:00", "23:59:59", "IST", -120],
		["1956-06-02T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1956-09-29T23:59:59+00:00", "02:59:59", "IDT", -180],
		["1956-09-30T00:00:00+00:00", "02:00:00", "IST", -120]
	]),

	"1957" : helpers.makeTestYear("Asia/Jerusalem", [
		["1957-04-28T23:59:59+00:00", "01:59:59", "IST", -120],
		["1957-04-29T00:00:00+00:00", "03:00:00", "IDT", -180],
		["1957-09-21T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1957-09-21T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1974" : helpers.makeTestYear("Asia/Jerusalem", [
		["1974-07-06T21:59:59+00:00", "23:59:59", "IST", -120],
		["1974-07-06T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1974-10-12T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1974-10-12T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1975" : helpers.makeTestYear("Asia/Jerusalem", [
		["1975-04-19T21:59:59+00:00", "23:59:59", "IST", -120],
		["1975-04-19T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1975-08-30T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1975-08-30T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1985" : helpers.makeTestYear("Asia/Jerusalem", [
		["1985-04-13T21:59:59+00:00", "23:59:59", "IST", -120],
		["1985-04-13T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1985-09-14T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1985-09-14T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1986" : helpers.makeTestYear("Asia/Jerusalem", [
		["1986-05-17T21:59:59+00:00", "23:59:59", "IST", -120],
		["1986-05-17T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1986-09-06T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1986-09-06T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1987" : helpers.makeTestYear("Asia/Jerusalem", [
		["1987-04-14T21:59:59+00:00", "23:59:59", "IST", -120],
		["1987-04-14T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1987-09-12T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1987-09-12T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1988" : helpers.makeTestYear("Asia/Jerusalem", [
		["1988-04-09T21:59:59+00:00", "23:59:59", "IST", -120],
		["1988-04-09T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1988-09-03T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1988-09-03T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1989" : helpers.makeTestYear("Asia/Jerusalem", [
		["1989-04-29T21:59:59+00:00", "23:59:59", "IST", -120],
		["1989-04-29T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1989-09-02T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1989-09-02T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1990" : helpers.makeTestYear("Asia/Jerusalem", [
		["1990-03-24T21:59:59+00:00", "23:59:59", "IST", -120],
		["1990-03-24T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1990-08-25T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1990-08-25T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1991" : helpers.makeTestYear("Asia/Jerusalem", [
		["1991-03-23T21:59:59+00:00", "23:59:59", "IST", -120],
		["1991-03-23T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1991-08-31T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1991-08-31T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1992" : helpers.makeTestYear("Asia/Jerusalem", [
		["1992-03-28T21:59:59+00:00", "23:59:59", "IST", -120],
		["1992-03-28T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1992-09-05T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1992-09-05T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1993" : helpers.makeTestYear("Asia/Jerusalem", [
		["1993-04-01T21:59:59+00:00", "23:59:59", "IST", -120],
		["1993-04-01T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1993-09-04T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1993-09-04T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1994" : helpers.makeTestYear("Asia/Jerusalem", [
		["1994-03-31T21:59:59+00:00", "23:59:59", "IST", -120],
		["1994-03-31T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1994-08-27T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1994-08-27T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1995" : helpers.makeTestYear("Asia/Jerusalem", [
		["1995-03-30T21:59:59+00:00", "23:59:59", "IST", -120],
		["1995-03-30T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1995-09-02T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1995-09-02T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1996" : helpers.makeTestYear("Asia/Jerusalem", [
		["1996-03-14T21:59:59+00:00", "23:59:59", "IST", -120],
		["1996-03-14T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1996-09-15T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1996-09-15T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1997" : helpers.makeTestYear("Asia/Jerusalem", [
		["1997-03-20T21:59:59+00:00", "23:59:59", "IST", -120],
		["1997-03-20T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1997-09-13T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1997-09-13T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1998" : helpers.makeTestYear("Asia/Jerusalem", [
		["1998-03-19T21:59:59+00:00", "23:59:59", "IST", -120],
		["1998-03-19T22:00:00+00:00", "01:00:00", "IDT", -180],
		["1998-09-05T20:59:59+00:00", "23:59:59", "IDT", -180],
		["1998-09-05T21:00:00+00:00", "23:00:00", "IST", -120]
	]),

	"1999" : helpers.makeTestYear("Asia/Jerusalem", [
		["1999-04-01T23:59:59+00:00", "01:59:59", "IST", -120],
		["1999-04-02T00:00:00+00:00", "03:00:00", "IDT", -180],
		["1999-09-02T22:59:59+00:00", "01:59:59", "IDT", -180],
		["1999-09-02T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2000" : helpers.makeTestYear("Asia/Jerusalem", [
		["2000-04-13T23:59:59+00:00", "01:59:59", "IST", -120],
		["2000-04-14T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2000-10-05T21:59:59+00:00", "00:59:59", "IDT", -180],
		["2000-10-05T22:00:00+00:00", "00:00:00", "IST", -120]
	]),

	"2001" : helpers.makeTestYear("Asia/Jerusalem", [
		["2001-04-08T22:59:59+00:00", "00:59:59", "IST", -120],
		["2001-04-08T23:00:00+00:00", "02:00:00", "IDT", -180],
		["2001-09-23T21:59:59+00:00", "00:59:59", "IDT", -180],
		["2001-09-23T22:00:00+00:00", "00:00:00", "IST", -120]
	]),

	"2002" : helpers.makeTestYear("Asia/Jerusalem", [
		["2002-03-28T22:59:59+00:00", "00:59:59", "IST", -120],
		["2002-03-28T23:00:00+00:00", "02:00:00", "IDT", -180],
		["2002-10-06T21:59:59+00:00", "00:59:59", "IDT", -180],
		["2002-10-06T22:00:00+00:00", "00:00:00", "IST", -120]
	]),

	"2003" : helpers.makeTestYear("Asia/Jerusalem", [
		["2003-03-27T22:59:59+00:00", "00:59:59", "IST", -120],
		["2003-03-27T23:00:00+00:00", "02:00:00", "IDT", -180],
		["2003-10-02T21:59:59+00:00", "00:59:59", "IDT", -180],
		["2003-10-02T22:00:00+00:00", "00:00:00", "IST", -120]
	]),

	"2004" : helpers.makeTestYear("Asia/Jerusalem", [
		["2004-04-06T22:59:59+00:00", "00:59:59", "IST", -120],
		["2004-04-06T23:00:00+00:00", "02:00:00", "IDT", -180],
		["2004-09-21T21:59:59+00:00", "00:59:59", "IDT", -180],
		["2004-09-21T22:00:00+00:00", "00:00:00", "IST", -120]
	]),

	"2005" : helpers.makeTestYear("Asia/Jerusalem", [
		["2005-03-31T23:59:59+00:00", "01:59:59", "IST", -120],
		["2005-04-01T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2005-10-08T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2005-10-08T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2006" : helpers.makeTestYear("Asia/Jerusalem", [
		["2006-03-30T23:59:59+00:00", "01:59:59", "IST", -120],
		["2006-03-31T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2006-09-30T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2006-09-30T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2007" : helpers.makeTestYear("Asia/Jerusalem", [
		["2007-03-29T23:59:59+00:00", "01:59:59", "IST", -120],
		["2007-03-30T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2007-09-15T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2007-09-15T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2008" : helpers.makeTestYear("Asia/Jerusalem", [
		["2008-03-27T23:59:59+00:00", "01:59:59", "IST", -120],
		["2008-03-28T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2008-10-04T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2008-10-04T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2009" : helpers.makeTestYear("Asia/Jerusalem", [
		["2009-03-26T23:59:59+00:00", "01:59:59", "IST", -120],
		["2009-03-27T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2009-09-26T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2009-09-26T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2010" : helpers.makeTestYear("Asia/Jerusalem", [
		["2010-03-25T23:59:59+00:00", "01:59:59", "IST", -120],
		["2010-03-26T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2010-09-11T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2010-09-11T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2011" : helpers.makeTestYear("Asia/Jerusalem", [
		["2011-03-31T23:59:59+00:00", "01:59:59", "IST", -120],
		["2011-04-01T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2011-10-01T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2011-10-01T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2012" : helpers.makeTestYear("Asia/Jerusalem", [
		["2012-03-29T23:59:59+00:00", "01:59:59", "IST", -120],
		["2012-03-30T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2012-09-22T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2012-09-22T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2013" : helpers.makeTestYear("Asia/Jerusalem", [
		["2013-03-28T23:59:59+00:00", "01:59:59", "IST", -120],
		["2013-03-29T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2013-10-26T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2013-10-26T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2014" : helpers.makeTestYear("Asia/Jerusalem", [
		["2014-03-27T23:59:59+00:00", "01:59:59", "IST", -120],
		["2014-03-28T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2014-10-25T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2014-10-25T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2015" : helpers.makeTestYear("Asia/Jerusalem", [
		["2015-03-26T23:59:59+00:00", "01:59:59", "IST", -120],
		["2015-03-27T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2015-10-24T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2015-10-24T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2016" : helpers.makeTestYear("Asia/Jerusalem", [
		["2016-03-24T23:59:59+00:00", "01:59:59", "IST", -120],
		["2016-03-25T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2016-10-29T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2016-10-29T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2017" : helpers.makeTestYear("Asia/Jerusalem", [
		["2017-03-23T23:59:59+00:00", "01:59:59", "IST", -120],
		["2017-03-24T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2017-10-28T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2017-10-28T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2018" : helpers.makeTestYear("Asia/Jerusalem", [
		["2018-03-22T23:59:59+00:00", "01:59:59", "IST", -120],
		["2018-03-23T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2018-10-27T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2018-10-27T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2019" : helpers.makeTestYear("Asia/Jerusalem", [
		["2019-03-28T23:59:59+00:00", "01:59:59", "IST", -120],
		["2019-03-29T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2019-10-26T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2019-10-26T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2020" : helpers.makeTestYear("Asia/Jerusalem", [
		["2020-03-26T23:59:59+00:00", "01:59:59", "IST", -120],
		["2020-03-27T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2020-10-24T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2020-10-24T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2021" : helpers.makeTestYear("Asia/Jerusalem", [
		["2021-03-25T23:59:59+00:00", "01:59:59", "IST", -120],
		["2021-03-26T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2021-10-30T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2021-10-30T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2022" : helpers.makeTestYear("Asia/Jerusalem", [
		["2022-03-24T23:59:59+00:00", "01:59:59", "IST", -120],
		["2022-03-25T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2022-10-29T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2022-10-29T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2023" : helpers.makeTestYear("Asia/Jerusalem", [
		["2023-03-23T23:59:59+00:00", "01:59:59", "IST", -120],
		["2023-03-24T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2023-10-28T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2023-10-28T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2024" : helpers.makeTestYear("Asia/Jerusalem", [
		["2024-03-28T23:59:59+00:00", "01:59:59", "IST", -120],
		["2024-03-29T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2024-10-26T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2024-10-26T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2025" : helpers.makeTestYear("Asia/Jerusalem", [
		["2025-03-27T23:59:59+00:00", "01:59:59", "IST", -120],
		["2025-03-28T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2025-10-25T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2025-10-25T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2026" : helpers.makeTestYear("Asia/Jerusalem", [
		["2026-03-26T23:59:59+00:00", "01:59:59", "IST", -120],
		["2026-03-27T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2026-10-24T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2026-10-24T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2027" : helpers.makeTestYear("Asia/Jerusalem", [
		["2027-03-25T23:59:59+00:00", "01:59:59", "IST", -120],
		["2027-03-26T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2027-10-30T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2027-10-30T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2028" : helpers.makeTestYear("Asia/Jerusalem", [
		["2028-03-23T23:59:59+00:00", "01:59:59", "IST", -120],
		["2028-03-24T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2028-10-28T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2028-10-28T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2029" : helpers.makeTestYear("Asia/Jerusalem", [
		["2029-03-22T23:59:59+00:00", "01:59:59", "IST", -120],
		["2029-03-23T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2029-10-27T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2029-10-27T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2030" : helpers.makeTestYear("Asia/Jerusalem", [
		["2030-03-28T23:59:59+00:00", "01:59:59", "IST", -120],
		["2030-03-29T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2030-10-26T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2030-10-26T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2031" : helpers.makeTestYear("Asia/Jerusalem", [
		["2031-03-27T23:59:59+00:00", "01:59:59", "IST", -120],
		["2031-03-28T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2031-10-25T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2031-10-25T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2032" : helpers.makeTestYear("Asia/Jerusalem", [
		["2032-03-25T23:59:59+00:00", "01:59:59", "IST", -120],
		["2032-03-26T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2032-10-30T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2032-10-30T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2033" : helpers.makeTestYear("Asia/Jerusalem", [
		["2033-03-24T23:59:59+00:00", "01:59:59", "IST", -120],
		["2033-03-25T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2033-10-29T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2033-10-29T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2034" : helpers.makeTestYear("Asia/Jerusalem", [
		["2034-03-23T23:59:59+00:00", "01:59:59", "IST", -120],
		["2034-03-24T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2034-10-28T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2034-10-28T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2035" : helpers.makeTestYear("Asia/Jerusalem", [
		["2035-03-22T23:59:59+00:00", "01:59:59", "IST", -120],
		["2035-03-23T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2035-10-27T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2035-10-27T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2036" : helpers.makeTestYear("Asia/Jerusalem", [
		["2036-03-27T23:59:59+00:00", "01:59:59", "IST", -120],
		["2036-03-28T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2036-10-25T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2036-10-25T23:00:00+00:00", "01:00:00", "IST", -120]
	]),

	"2037" : helpers.makeTestYear("Asia/Jerusalem", [
		["2037-03-26T23:59:59+00:00", "01:59:59", "IST", -120],
		["2037-03-27T00:00:00+00:00", "03:00:00", "IDT", -180],
		["2037-10-24T22:59:59+00:00", "01:59:59", "IDT", -180],
		["2037-10-24T23:00:00+00:00", "01:00:00", "IST", -120]
	])
};