var templates = {};
/* global Hogan */
/* jshint ignore:start */
templates['index.mustache'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("mediaItems",c,p,1),c,p,0,15,402,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <p>");t.b("\n" + i);t.b("        <div>");t.b(t.v(t.f("title",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("        <span> ");t.b(t.v(t.f("getLatestBroadcastDate",c,p,0)));if(t.s(t.f("isTV",c,p,1),c,p,0,103,312,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" ");if(t.s(t.f("seasonNumber",c,p,1),c,p,0,121,178,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("localizeText",c,p,1),c,p,0,138,144,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("season");});c.pop();}t.b(" ");t.b(t.v(t.f("seasonNumber",c,p,0)));});c.pop();}if(t.s(t.f("seasonEpisodeNumber",c,p,1),c,p,0,219,287,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" : ");if(t.s(t.f("localizeText",c,p,1),c,p,0,239,246,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("episode");});c.pop();}t.b(" ");t.b(t.v(t.f("seasonEpisodeNumber",c,p,0)));});c.pop();}t.b(" ");});c.pop();}t.b(" ");if(t.s(t.f("formatLength",c,p,1),c,p,0,339,368,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" (");t.b(t.v(t.f("formatLengthNoSeconds",c,p,0)));t.b(") ");});c.pop();}t.b("</span>");t.b("\n" + i);t.b("    </p>");t.b("\n" + i);});c.pop();}return t.fl(); },partials: {}, subs: {  }});
/* jshint ignore:end */