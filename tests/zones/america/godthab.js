"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Godthab"] = {
	"guess" : helpers.makeTestGuess("America/Godthab", { offset: true, abbr: true }),

	"1916" : helpers.makeTestYear("America/Godthab", [
		["1916-07-28T03:26:55+00:00", "23:59:59", "LMT", 12416 / 60],
		["1916-07-28T03:26:56+00:00", "00:26:56", "WGT", 180]
	]),

	"1980" : helpers.makeTestYear("America/Godthab", [
		["1980-04-06T04:59:59+00:00", "01:59:59", "WGT", 180],
		["1980-04-06T05:00:00+00:00", "03:00:00", "WGST", 120],
		["1980-09-28T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1980-09-28T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1981" : helpers.makeTestYear("America/Godthab", [
		["1981-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1981-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1981-09-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1981-09-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1982" : helpers.makeTestYear("America/Godthab", [
		["1982-03-28T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1982-03-28T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1982-09-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1982-09-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1983" : helpers.makeTestYear("America/Godthab", [
		["1983-03-27T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1983-03-27T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1983-09-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1983-09-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1984" : helpers.makeTestYear("America/Godthab", [
		["1984-03-25T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1984-03-25T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1984-09-30T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1984-09-30T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1985" : helpers.makeTestYear("America/Godthab", [
		["1985-03-31T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1985-03-31T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1985-09-29T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1985-09-29T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1986" : helpers.makeTestYear("America/Godthab", [
		["1986-03-30T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1986-03-30T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1986-09-28T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1986-09-28T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1987" : helpers.makeTestYear("America/Godthab", [
		["1987-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1987-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1987-09-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1987-09-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1988" : helpers.makeTestYear("America/Godthab", [
		["1988-03-27T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1988-03-27T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1988-09-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1988-09-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1989" : helpers.makeTestYear("America/Godthab", [
		["1989-03-26T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1989-03-26T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1989-09-24T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1989-09-24T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1990" : helpers.makeTestYear("America/Godthab", [
		["1990-03-25T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1990-03-25T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1990-09-30T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1990-09-30T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1991" : helpers.makeTestYear("America/Godthab", [
		["1991-03-31T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1991-03-31T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1991-09-29T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1991-09-29T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1992" : helpers.makeTestYear("America/Godthab", [
		["1992-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1992-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1992-09-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1992-09-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1993" : helpers.makeTestYear("America/Godthab", [
		["1993-03-28T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1993-03-28T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1993-09-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1993-09-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1994" : helpers.makeTestYear("America/Godthab", [
		["1994-03-27T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1994-03-27T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1994-09-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1994-09-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1995" : helpers.makeTestYear("America/Godthab", [
		["1995-03-26T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1995-03-26T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1995-09-24T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1995-09-24T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1996" : helpers.makeTestYear("America/Godthab", [
		["1996-03-31T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1996-03-31T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1996-10-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1996-10-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1997" : helpers.makeTestYear("America/Godthab", [
		["1997-03-30T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1997-03-30T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1997-10-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1997-10-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1998" : helpers.makeTestYear("America/Godthab", [
		["1998-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1998-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1998-10-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1998-10-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"1999" : helpers.makeTestYear("America/Godthab", [
		["1999-03-28T00:59:59+00:00", "21:59:59", "WGT", 180],
		["1999-03-28T01:00:00+00:00", "23:00:00", "WGST", 120],
		["1999-10-31T00:59:59+00:00", "22:59:59", "WGST", 120],
		["1999-10-31T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2000" : helpers.makeTestYear("America/Godthab", [
		["2000-03-26T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2000-03-26T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2000-10-29T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2000-10-29T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2001" : helpers.makeTestYear("America/Godthab", [
		["2001-03-25T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2001-03-25T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2001-10-28T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2001-10-28T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2002" : helpers.makeTestYear("America/Godthab", [
		["2002-03-31T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2002-03-31T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2002-10-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2002-10-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2003" : helpers.makeTestYear("America/Godthab", [
		["2003-03-30T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2003-03-30T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2003-10-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2003-10-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2004" : helpers.makeTestYear("America/Godthab", [
		["2004-03-28T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2004-03-28T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2004-10-31T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2004-10-31T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2005" : helpers.makeTestYear("America/Godthab", [
		["2005-03-27T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2005-03-27T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2005-10-30T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2005-10-30T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2006" : helpers.makeTestYear("America/Godthab", [
		["2006-03-26T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2006-03-26T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2006-10-29T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2006-10-29T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2007" : helpers.makeTestYear("America/Godthab", [
		["2007-03-25T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2007-03-25T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2007-10-28T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2007-10-28T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2008" : helpers.makeTestYear("America/Godthab", [
		["2008-03-30T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2008-03-30T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2008-10-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2008-10-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2009" : helpers.makeTestYear("America/Godthab", [
		["2009-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2009-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2009-10-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2009-10-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2010" : helpers.makeTestYear("America/Godthab", [
		["2010-03-28T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2010-03-28T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2010-10-31T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2010-10-31T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2011" : helpers.makeTestYear("America/Godthab", [
		["2011-03-27T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2011-03-27T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2011-10-30T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2011-10-30T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2012" : helpers.makeTestYear("America/Godthab", [
		["2012-03-25T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2012-03-25T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2012-10-28T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2012-10-28T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2013" : helpers.makeTestYear("America/Godthab", [
		["2013-03-31T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2013-03-31T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2013-10-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2013-10-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2014" : helpers.makeTestYear("America/Godthab", [
		["2014-03-30T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2014-03-30T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2014-10-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2014-10-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2015" : helpers.makeTestYear("America/Godthab", [
		["2015-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2015-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2015-10-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2015-10-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2016" : helpers.makeTestYear("America/Godthab", [
		["2016-03-27T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2016-03-27T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2016-10-30T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2016-10-30T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2017" : helpers.makeTestYear("America/Godthab", [
		["2017-03-26T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2017-03-26T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2017-10-29T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2017-10-29T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2018" : helpers.makeTestYear("America/Godthab", [
		["2018-03-25T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2018-03-25T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2018-10-28T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2018-10-28T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2019" : helpers.makeTestYear("America/Godthab", [
		["2019-03-31T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2019-03-31T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2019-10-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2019-10-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2020" : helpers.makeTestYear("America/Godthab", [
		["2020-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2020-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2020-10-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2020-10-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2021" : helpers.makeTestYear("America/Godthab", [
		["2021-03-28T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2021-03-28T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2021-10-31T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2021-10-31T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2022" : helpers.makeTestYear("America/Godthab", [
		["2022-03-27T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2022-03-27T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2022-10-30T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2022-10-30T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2023" : helpers.makeTestYear("America/Godthab", [
		["2023-03-26T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2023-03-26T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2023-10-29T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2023-10-29T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2024" : helpers.makeTestYear("America/Godthab", [
		["2024-03-31T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2024-03-31T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2024-10-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2024-10-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2025" : helpers.makeTestYear("America/Godthab", [
		["2025-03-30T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2025-03-30T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2025-10-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2025-10-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2026" : helpers.makeTestYear("America/Godthab", [
		["2026-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2026-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2026-10-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2026-10-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2027" : helpers.makeTestYear("America/Godthab", [
		["2027-03-28T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2027-03-28T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2027-10-31T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2027-10-31T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2028" : helpers.makeTestYear("America/Godthab", [
		["2028-03-26T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2028-03-26T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2028-10-29T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2028-10-29T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2029" : helpers.makeTestYear("America/Godthab", [
		["2029-03-25T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2029-03-25T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2029-10-28T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2029-10-28T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2030" : helpers.makeTestYear("America/Godthab", [
		["2030-03-31T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2030-03-31T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2030-10-27T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2030-10-27T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2031" : helpers.makeTestYear("America/Godthab", [
		["2031-03-30T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2031-03-30T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2031-10-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2031-10-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2032" : helpers.makeTestYear("America/Godthab", [
		["2032-03-28T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2032-03-28T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2032-10-31T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2032-10-31T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2033" : helpers.makeTestYear("America/Godthab", [
		["2033-03-27T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2033-03-27T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2033-10-30T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2033-10-30T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2034" : helpers.makeTestYear("America/Godthab", [
		["2034-03-26T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2034-03-26T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2034-10-29T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2034-10-29T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2035" : helpers.makeTestYear("America/Godthab", [
		["2035-03-25T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2035-03-25T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2035-10-28T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2035-10-28T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2036" : helpers.makeTestYear("America/Godthab", [
		["2036-03-30T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2036-03-30T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2036-10-26T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2036-10-26T01:00:00+00:00", "22:00:00", "WGT", 180]
	]),

	"2037" : helpers.makeTestYear("America/Godthab", [
		["2037-03-29T00:59:59+00:00", "21:59:59", "WGT", 180],
		["2037-03-29T01:00:00+00:00", "23:00:00", "WGST", 120],
		["2037-10-25T00:59:59+00:00", "22:59:59", "WGST", 120],
		["2037-10-25T01:00:00+00:00", "22:00:00", "WGT", 180]
	])
};