/*! *//*!
 * tabloid.js v1.0.1 - "Sogeking no shima deeeeeee - One Piece"
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
 * $('table').tabloid({
 *     rowWidth: '35%'
 * });
 *
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 2015 Achraf Chouk <achrafchouk@gmail.com>
 */

(function ($){
    "use strict";
    var Tabloid = function ($el, options){
        //vars
        var _tabloid = this;
        _tabloid.$el = $el;
        _tabloid.options = $.extend({}, options);

        //initialize
        _tabloid.initialize();

        //bind change event on element
        _tabloid.$wind.on('load', $.proxy(_tabloid.update, _tabloid));
        _tabloid.$wind.on('resize', $.proxy(_tabloid.update, _tabloid));
        _tabloid.$wind.on('redraw', function (){
            _tabloid.switched = false;
            _tabloid.update();
        });

        //get table slip
        _tabloid.switched = false;
        _tabloid.update();
    };

    Tabloid.prototype.options = {};
    Tabloid.prototype.$el = null;
    Tabloid.prototype.$wind = $(window);
    Tabloid.prototype.switched = false;

    Tabloid.prototype.initialize = function (){
        var _tabloid = this;

        //initialize CSS
        _tabloid.$el.css({
            borderCollapse: 'collapse',
            width: '100%'
        });
    };

    Tabloid.prototype.update = function (){
        var _tabloid = this;

        if (!_tabloid.switched) {
            _tabloid.switched = true;
            _tabloid.splitTable(_tabloid.$el);

            return true;
        }
        else {
            _tabloid.switched = false;
            _tabloid.unsplitTable(_tabloid.$el);
        }
    };

    Tabloid.prototype.splitTable = function (original){
        var _tabloid = this;

        original.wrap('<div class="tabloid-wrapper" />');

        var copy = original.clone();
        copy.find('td:not(:first-child), th:not(:first-child)').css('display', 'none');
        copy.removeClass('responsive');

        original.closest('.tabloid-wrapper').append(copy);
        copy.wrap('<div class="tabloid-pinned" style="width:'+_tabloid.options.rowWidth+';" />');
        original.wrap('<div class="tabloid-scrollable" style="margin-left:'+_tabloid.options.rowWidth+';" />');

        _tabloid.setCells(original, copy);
    };

    Tabloid.prototype.unsplitTable = function (original){
        original.closest('.tabloid-wrapper').find('.tabloid-pinned').remove();
        original.unwrap();
    };

    Tabloid.prototype.setCells = function (original, copy){
        var _tabloid = this;

        var tr = original.find('tr'),
            tr_copy = copy.find('tr'),
            heights = [];

        $.each(tr, function (index){
            var self = $(this),
            tx = self.find('th, td');

            $.each(tx, function (){
                var height = $(this).outerHeight(true);
                heights[index] = heights[index] || 0;

                if (height > heights[index])
                    heights[index] = height;
            });
        });

        $.each(tr_copy, function (index) {
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

                new Tabloid($(this), settings);
            });
        },
        update: function (){},
        destroy: function (){}
    };

    $.fn.tabloid = function (method){
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.Tabloid');
        }
    };
})(window.jQuery);
