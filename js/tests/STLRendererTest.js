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

    describe("resize(width, height)", function () {
        let renderer
        beforeEach( function () {
            renderer = new STLRenderer(800, 600)
        })

        it("Should not accept an uninitialized size", function () {
            expect(function () {
                var size
                renderer.resize(size, size)
            }).toThrowError()
        })

        it("Should not accept a negative width", function () {
            expect(function () {
                renderer.resize(width, height)
            }).toThrowError()
        })

        it("Should not accept a negative height", function() {
            expect(function () {
                renderer.resize(width, height)
            }).toThrowError()
        })

        it("Should not accept zero width", function() {
            expect(function () {
                renderer.resize(width, height)
            }).toThrowError()
        })

        it("Should not accept zero height", function() {
            expect(function () {
                renderer.resize(width, height)
            }).toThrowError()
        })
    })

    describe("destroy()", function () {
        let renderer
        beforeEach( function () {
            renderer = new STLRenderer(800, 600)
        })

        it("Should destroy without error", function () {
            expect(function () {
                renderer.destroy()
            }).not.toThrowError()
        })
    })

    describe("getCanvas()", function () {
        let renderer
        let width = 800
        let height = 600
        beforeEach( function () {
            renderer = new STLRenderer(width, height)
        })

        it("Should return canvas of right size", function () {
            let canvas = renderer.getCanvas()
            expect(canvas.width).toBe(width)
            expect(canvas.height).toBe(height)
        })
    })

    describe("load(path)", function () {
        let renderer
        let width = 800
        let height = 600
        beforeEach( function () {
            renderer = new STLRenderer(width, height)
        })

        it("Should not accept an empty path", function () {
            expect(function () {
                renderer.load("")
            }).toThrowError()
        })
    })
})