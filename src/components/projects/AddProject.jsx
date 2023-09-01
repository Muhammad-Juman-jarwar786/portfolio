import { useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import { addProjectSchema } from '../../validations/YupValidations';
import DataBase from '../../config/firebase';
import { ref, push } from 'firebase/database';
import '../Button.css';

const AddProject = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      tagname1: '',
      tagname2: '',
      tagname3: '',
      imageUrl: '',
      githubLink: '',
      websiteLink: '',
    },
    validationSchema: addProjectSchema,
    onSubmit: (values) => {
      formik.resetForm();
      saveProjectData(values);
    },
  });

  const saveProjectData = async (projectData) => {
    try {
      const dbRef = ref(DataBase, 'projects');

      const newProjectRef = push(dbRef, projectData);

      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#050816]">
      <div className="bg-[#100D25] p-8 rounded-lg shadow-lg  mt-28 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">ADD PROJECT</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4 w-[80vw] lg:w-[40vw]"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your project name?"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 outline-none rounded-md shadow-sm "
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 italic">{formik.errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your project..."
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 outline-none bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 italic">{formik.errors.description}</p>
            )}
          </div>
          <div>
            <label htmlFor="tags" className="block text-lg font-medium mb-1">
              Tags
            </label>
            <div className="space-y-5">
              <div className="grid space-y-5 md:space-y-0 items-center gap-x-5">
                <div>
                  <input
                    type="text"
                    name="tagname1"
                    placeholder="Tag(1) Name"
                    value={formik.values.tagname1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-3 outline-none bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {formik.touched.tagname1 && formik.errors.tagname1 && (
                    <p className="text-red-500 italic">
                      {formik.errors.tagname1}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid space-y-5 md:space-y-0 items-center gap-x-5">
                <div>
                  <input
                    type="text"
                    name="tagname2"
                    placeholder="Tag(2) Name"
                    value={formik.values.tagname2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-3 outline-none bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {formik.touched.tagname2 && formik.errors.tagname2 && (
                    <p className="text-red-500 italic">
                      {formik.errors.tagname2}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid space-y-5 md:space-y-0 items-center gap-x-5">
                <div>
                  <input
                    type="text"
                    name="tagname3"
                    placeholder="Tag(3) Name"
                    value={formik.values.tagname3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-3 outline-none bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {formik.touched.tagname3 && formik.errors.tagname3 && (
                    <p className="text-red-500 italic">
                      {formik.errors.tagname3}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="imageUrl" className="block font-medium mb-1 mt-5">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Image Url goes here"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 outline-none bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.imageUrl && formik.errors.imageUrl && (
              <p className="text-red-500 italic">{formik.errors.imageUrl}</p>
            )}
          </div>
          <div>
            <label htmlFor="githubLink" className="block font-medium mb-1 mt-5">
              GitHub Link
            </label>
            <input
              type="text"
              id="githubLink"
              name="githubLink"
              placeholder="Github Repository link "
              value={formik.values.githubLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 outline-none bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.githubLink && formik.errors.name && (
              <p className="text-red-500 italic">{formik.errors.githubLink}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="websiteLink"
              className="block font-medium mb-1 mt-5"
            >
              Website Link
            </label>
            <input
              type="text"
              id="websiteLink"
              name="websiteLink"
              placeholder="Website Deployed link"
              value={formik.values.websiteLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 outline-none bg-[#151030] font-semibold text-white drop-shadow-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.websiteLink && formik.errors.websiteLink && (
              <p className="text-red-500 italic">{formik.errors.websiteLink}</p>
            )}
          </div>
          <button
            type="submit"
            className="btnSignIn bg-[#151030] hover: drop-shadow-lg text-slate-50 font-bold text-lg transition-all duration-500 hover:scale-105 py-2 px-4 rounded-md shadow-md hover:bg-[#151040] mt-5"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
