import {TypeInfo} from "../../Source/TypeInfo";

describe("when getting typeinfo from object", () => {
    let obj = {};
    let typeInfo = null;

    beforeEach(() => {
        (becauseOf => {
            typeInfo = obj.typeInfo;
        })();
    });

    it("should return a typeinfo", () => typeInfo.should.not.be.undefined);
    it("should have object as name", () => typeInfo.name.should.equal("Object"));
})