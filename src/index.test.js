import {expect}  from 'chai';
import lolHeroes from './index';

describe('lol-heroes', function(){
    describe('all', function(){
        it('should be an array of strings', function(){
            expect(lolHeroes.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `熔岩巨兽`', function(){
            expect(lolHeroes.all).to.include('熔岩巨兽');
        })
    });

    describe('random', function(){
        it('should return a random item from the lolHeroes.all', function(){
            var randomItem = lolHeroes.random();
            expect(lolHeroes.all).to.include(randomItem);
        });

        it('should return an array of random items if passed a number', function(){
            var randomItems = lolHeroes.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item){
                expect(lolHeroes.all).to.include(item);
            });
        });
    });
});