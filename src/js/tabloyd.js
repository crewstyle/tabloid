/*! *//*!
 * tabloyd.js v2.0.1 - "Sogeking no shima deeeeeee - One Piece"
 * ~~~~~~~~~~~~~~~~~~
 *
 * Example of use HTML:
 * <table class="to-responsify">
 *     <tr>
 *         <th>Head #1</th>
 *         <th>Head #2</th>
 *     </tr>
 *     <tr>
 *         <td>Content #1</td>
 *         <td>Content #2</td>
 *     </tr>
 * </table>
 *
 * Example of use JS:
 * $('table').tabloyd({
 *     rowWidth: '35%'
 * });
 *
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 2015 Achraf Chouk <achrafchouk@gmail.com>
 */

(function ($){
    "use strict";
    var Tabloyd = function ($el, options){
        //vars
        var _tabloyd = this;
        _tabloyd.$el = $el;
        _tabloyd.options = $.extend({}, options);

        //initialize
        _tabloyd.initialize();

        //bind change event on element
        _tabloyd.$wind.on('load', $.proxy(_tabloyd.update, _tabloyd));
        _tabloyd.$wind.on('resize', $.proxy(_tabloyd.update, _tabloyd));
        _tabloyd.$wind.on('redraw', function (){
            _tabloyd.switched = false;
            _tabloyd.update();
        });

        //get table slip
        _tabloyd.switched = false;
        _tabloyd.update();
    };

    Tabloyd.prototype.options = {};
    Tabloyd.prototype.$el = null;
    Tabloyd.prototype.$wind = $(window);
    Tabloyd.prototype.switched = false;

    Tabloyd.prototype.initialize = function (){
        var _tabloyd = this;

        //initialize CSS
        _tabloyd.$el.css({
            borderCollapse: 'collapse',
            width: '100%'
        });
    };

    Tabloyd.prototype.update = function (){
        var _tabloyd = this;

        if (!_tabloyd.switched) {
            _tabloyd.switched = true;
            _tabloyd.splitTable(_tabloyd.$el);

            return true;
        }
        else {
            _tabloyd.switched = false;
            _tabloyd.unsplitTable(_tabloyd.$el);
        }
    };

    Tabloyd.prototype.splitTable = function ($original){
        var _tabloyd = this;

        //make it work only once
        if (!$originas.parent().hasClass('tabloid-wrapper')) {
            $original.wrap('<div class="tabloid-wrapper" />');

            var $copy = $original.clone();
            $copy.find('td:not(:first-child), th:not(:first-child)').css('display', 'none');
            $copy.removeClass('responsive');

            $original.closest('.tabloid-wrapper').append($copy);
            $copy.wrap('<div class="tabloid-pinned" style="width:'+_tabloyd.options.rowWidth+'" />');
            $original.wrap('<div class="tabloid-scrollable" style="margin-left:'+_tabloyd.options.rowWidth+'" />');

            _tabloyd.setCells($original, $copy);
        }
    };

    Tabloyd.prototype.unsplitTable = function ($original){
        $original.closest('.tabloid-wrapper').find('.tabloid-pinned').remove();
        $original.unwrap();
    };

    Tabloyd.prototype.setCells = function ($original, $copy){
        var _tabloyd = this;

        var $tr = $original.find('tr'),
            $tr_copy = $copy.find('tr'),
            heights = [];

        $.each($tr, function (index){
            var $self = $(this),
                $tx = $self.find('th, td');

            $.each($tx, function (){
                var height = $(this).outerHeight(true);
                heights[index] = heights[index] || 0;

                if (height > heights[index])
                    heights[index] = height;
            });
        });

        $.each($tr_copy, function (index) {
            $(this).height(heights[index]);
        });
    };

    var methods = {
        init: function (options){
            if (!this.length) {
                return false;
            }

            var settings = {
                rowWidth: '35%'
            };

            return this.each(function (){
                if (options) {
                    $.extend(settings, options);
                }

                new Tabloyd($(this), settings);
            });
        },
        update: function (){},
        destroy: function (){}
    };

    $.fn.tabloyd = function (method){
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.Tabloyd');
        }
    };
})(window.jQuery);
