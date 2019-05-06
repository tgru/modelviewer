import {STLRenderer} from '../src/STLRenderer'

describe("STLRenderer", function () {
    describe("constructor(width, height)", function () {
        it("Should build without error", function () {
            expect(function () {
                let renderer = new STLRenderer(800, 600)
            }).not.toThrowError()
        })

        it("Should not accept a negative width", function () {
            expect(function () {
                let renderer = new STLRenderer(-800, 600)
            }).toThrowError()
        })

        it("Should not accept a negative height", function() {
            expect(function () {
                let renderer = new STLRenderer(800, -600)
            }).toThrowError()
        })

        it("Should not accept zero width", function() {
            expect(function () {
                let renderer = new STLRenderer(0, 600)
            }).toThrowError()
        })

        it("Should not accept zero height", function() {
            expect(function () {
                let renderer = new STLRenderer(800, 0)
            }).toThrowError()
        })
    })
})